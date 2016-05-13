Rails.application.routes.draw do
  
	get "/", to: "site#home"
	get "/genies_bracket", to: "comparison#genies_bracket"
	get "/my_bracket", to: "comparison#my_bracket"
	
	resources :comparison
	
  	devise_for :users
	
	scope "/api" do  
		get "/master/:name", to: "team#master_api"
		get "/schedule/:name", to: "team#scrape_schedules"
		get "/test", to: "team#test"
	end

end



