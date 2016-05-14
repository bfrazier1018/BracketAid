class ComparisonController < ApplicationController

	def index
		@games = Game.all
	end	

	def show
		@game = Game.find_by(id: params[:id])
		@add_id = @game.id + 1
		@subtract_id = @game.id - 1
	end

	def genies_bracket

	end

	def my_bracket
	end
end
