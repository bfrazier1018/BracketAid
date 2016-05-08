Rails.application.routes.draw do
  
	get "/", to: "site#home"
	
	get "/comparison", to: "comparison#index"
	
	scope "/api" do  
		# For Team Stats
		get "/team/:name", to: "team#stats"
		# For Wins/Losses, SOS, RPI, Rank
		get "/rank/:name", to: "team#rank"
		# For creating database
		get "/database", to: "team#database"
	end

end
