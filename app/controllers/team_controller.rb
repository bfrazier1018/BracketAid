class TeamController < ApplicationController
	
	protect_from_forgery with: :null_session

	def master_api
		team = Team.find_by(name: params[:name])
		rank = Rank.find_by(name: params[:name])
		stat = Stat.find_by(market: params[:name])
		logo = Logo.find_by(name: params[:name])

		score = [
			((17 - team.seed) * 0.20) +
			(rank.rpi * 0.35) +
			((stat.points - stat.opponent_points) * 0.30) +
			((stat.field_goals_made / stat.field_goals_att) * 0.10) +
			((stat.free_throws_made / stat.free_throws_att) * 0.05)
		]

		render json: {
			user: team,
			rank: rank,
			stats: stat,
			score: score,
			logo: logo
		}
	end	

		def scraper
		require "open-uri"
			# doc = Nokogiri::HTML(open("http://www.foxsports.com/college-football/teams"))
			doc = Nokogiri::HTML(open("http://www.foxsports.com/college-football/teams?group=3"))
			
			entries = doc.css(".wisfb_fullTeamStacked")
			
			entries.each do |entry|
				Logo.create(src: entry.css(".wisfb_logoImage")[0]["src"],
				name: entry.css("span")[0].text)
			end
			render text: entries
		end
end

	





