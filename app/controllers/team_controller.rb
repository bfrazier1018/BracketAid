class TeamController < ApplicationController
	
	protect_from_forgery with: :null_session

	def master_api
		team = Team.find_by(name: params[:name])
		rank = Rank.find_by(name: params[:name])
		stat = Stat.find_by(market: params[:name])
		logo = Logo.find_by(name: params[:name])

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
			logo: logo
		}
	end	

end

	





