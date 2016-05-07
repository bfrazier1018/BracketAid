require "httparty"

class TeamController < ApplicationController
	
	protect_from_forgery with: :null_session

	def index

		response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/tournaments/608152a4-cccc-4569-83ac-27062580099e/summary.json?api_key=t8533xedsh9yewxfka46mq5u")
		body = response.parsed_response["brackets"]
		
		body.each do |bracket|
			bracket["participants"].each do |team|
				Team.create(name: team["market"], team_id: team["id"], seed: team["seed"])
			end
		end		

		render json: "success"
	end

	def show
		team = Team.find_by(name: params[:name])
		id = team.team_id

		response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/seasontd/2015/REG/teams/#{id}/statistics.json?api_key=t8533xedsh9yewxfka46mq5u")
		
		render json: response
	end
end

