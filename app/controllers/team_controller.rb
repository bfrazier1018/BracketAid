require "httparty"
class TeamController < ApplicationController
	
	protect_from_forgery with: :null_session

	def master_api
		team = Team.find_by(name: params[:name])
		rank = Rank.find_by(name: params[:name])
		stats = Stat.find_by(market: params[:name])

		render json: {
			user: team,
			rank: rank,
			stats: stats
		}
	end
	
end

	
