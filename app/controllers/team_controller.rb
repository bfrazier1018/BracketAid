require "httparty"

class TeamController < ApplicationController
	
	protect_from_forgery with: :null_session


	def stats
		# Get Team Stats ( Points, Turnovers, Percentages Etc)
		team = Team.find_by(name: params[:name])
		id = team.team_id

		response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/seasontd/2015/REG/teams/#{id}/statistics.json?api_key=t8533xedsh9yewxfka46mq5u")
		
		render json: response
	end

	def rank
		# For Wins/Losses, SOS, RPI, Rank
		team = Rank.find_by(name: params[:name])
		
		render json: team
	end

	def info
		team = Team.find_by(name: params[:name])

		render json: team
	end


	def database
		# Find and Save teams Id, Name, and Tourny Rank to Database
		# response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/tournaments/608152a4-cccc-4569-83ac-27062580099e/summary.json?api_key=t8533xedsh9yewxfka46mq5u")
		# body = response.parsed_response["brackets"]
		
		# body.each do |bracket|
		# 	bracket["participants"].each do |team|
		# 		Team.create(name: team["market"], team_id: team["id"], seed: team["seed"])
		# 	end
		# end

		# Find and Save SOS, Wins, Losses, RPI, Name, Team Id
		# response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/polls/rpi/2015/rankings.json?api_key=t8533xedsh9yewxfka46mq5u")
		# body = response.parsed_response["rankings"]
		
		# body.each do |team|
		# 	Rank.create(name: team["market"], rank: team["rank"], wins: team["wins"], losses: team["losses"], sos: team["sos"], rpi: team["rpi"], team_id: team["id"])
		# end		
		
		# render json: response
	end
end

	
