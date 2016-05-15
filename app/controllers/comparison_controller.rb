class ComparisonController < ApplicationController

	before_action :authenticate_user!

	def index
		@games = Game.all
	end	

	def show
		@game = Game.find_by(id: params[:id])
		@add_id = @game.id + 1
		@subtract_id = @game.id - 1
	end
end
