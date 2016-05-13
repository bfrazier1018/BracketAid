class TeamController < ApplicationController
	
	protect_from_forgery with: :null_session

	def master_api
		team = Team.find_by(name: params[:name])
		rank = Rank.find_by(name: params[:name])
		stat = Stat.find_by(market: params[:name])
		logo = Logo.find_by(name: params[:name])
		schedule = Schedule.find_by(name: params[:name])

		score = [
			((17 - team.seed) * 0.20) +
			(rank.rpi * 0.40) +
			((stat.points - stat.opponent_points) * 0.25) +
			((stat.field_goals_made / stat.field_goals_att) * 0.10) +
			((stat.free_throws_made / stat.free_throws_att) * 0.05)
		]

		render json: {
			user: team,
			rank: rank,
			stats: stat,
			score: score,
			logo: logo,
			schedule: schedule
		}
	end	

	def scrape_schedules
		require "open-uri"
		schedule = Schedule.find_by(name: params[:name])
		href = schedule.href
			doc = Nokogiri::HTML(open("#{href}"))

			entries = doc.css(".oddrow, .evenrow")
			new_entries = entries.map do |row|
				game = {
					date: row.css("td")[0].text,
					opponent: row.css(".team-name>a").text,
					result: row.css(".game-status>span").text,
					score: row.css(".score>a").text,	
				}	
			end
		render json: new_entries
	end

	def test
		response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/tournaments/608152a4-cccc-4569-83ac-27062580099e/schedule.json?api_key=t8533xedsh9yewxfka46mq5u")
		body = response["rounds"]

		body.each do |league|
			league["bracketed"].each do |round|
				round["games"].each do |game|
					Game.create(
						title: game["title"],
						venue: game["venue"]["name"],
						city: game["venue"]["city"],
						state: game["venue"]["state"],
						home_team: game["home"]["name"],
						away_team: game["away"]["name"],
						)
				end
			end
		end
		
		render json: body
	end

end

	





