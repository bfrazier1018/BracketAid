Rails.application.routes.draw do
  
	get "/", to: "site#home"
	
  	devise_for :users
	
	scope "/api" do  
		get "/master/:name", to: "team#master_api"
		get "/schedule/:name", to: "team#scrape_schedules"
	end

end



