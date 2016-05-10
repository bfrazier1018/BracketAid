Rails.application.routes.draw do
  
	get "/", to: "site#home"
	
  	devise_for :users
	
	scope "/api" do  
		get "/master/:name", to: "team#master_api"
	end

end
