Rails.application.routes.draw do
  
	get "/", to: "site#home"
	# Main Team Comparison Page
	
  	devise_for :users
	
	scope "/api" do  
		# For Stats: Points, Rebouds, Percentages...
		get "/team/:name", to: "team#stats"
		# For Wins/Losses, SOS, RPI, Rank
		get "/rank/:name", to: "team#rank"
		# For Name, Seed, Id
		get "/info/:name", to: "team#info"
		# For creating database
		get "/database", to: "team#database"
	end

end
