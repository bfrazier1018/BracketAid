Rails.application.routes.draw do
  
	get "/", to: "site#home"
	# Main Team Comparison Page
	
  	devise_for :users
	
	scope "/api" do  
		# For Stats: Points, Rebouds, Percentages...
		get "/master/:name", to: "team#master_api"

		# For creating database
		get "/database", to: "team#database"
	end

end
