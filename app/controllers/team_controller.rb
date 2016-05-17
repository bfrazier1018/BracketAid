class TeamController < ApplicationController
	
	protect_from_forgery with: :null_session

	def master_api
		team = Team.find_by(name: params[:name])
		rank = Rank.find_by(name: params[:name])
		stat = Stat.find_by(market: params[:name])
		logo = Logo.find_by(name: params[:name])
		schedule = Schedule.find_by(name: params[:name])
		games = Game.all
		
		score = [
			((17 - team.seed) * 0.10) +
			(rank.rpi * 0.55) +
			((stat.points - stat.opponent_points) * 0.20) +
			((stat.field_goals_made / stat.field_goals_att) * 0.10) +
			((stat.free_throws_made / stat.free_throws_att) * 0.05)
		]

		render json: {
			user: team,
			rank: rank,
			stats: stat,
			score: score,
			logo: logo,
			schedule: schedule,
			games: games
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

end

	





