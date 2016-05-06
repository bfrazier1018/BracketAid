class TeamController < ApplicationController

	protect_from_forgery with: :null_session

	def index

		response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/tournaments/608152a4-cccc-4569-83ac-27062580099e/summary.json?api_key=t8533xedsh9yewxfka46mq5u")
		body = JSON.parse(response.body)
		render json: body["brackets"], status:200
	end
end
