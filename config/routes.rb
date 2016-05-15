Rails.application.routes.draw do
  
	get "/", to: "site#home"
	
	resources :comparison, only: [:show]
	resources :brackets, only: [:index]
	
  	devise_for :users
	
	scope "/api" do  
		get "/master/:name", to: "team#master_api"
		get "/schedule/:name", to: "team#scrape_schedules"
	end

end



