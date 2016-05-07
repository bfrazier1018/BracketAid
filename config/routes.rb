Rails.application.routes.draw do
  
	get "/", to: "site#home"
	
	scope "/api" do  
		get "/team", to: "team#index"
		get "/team/:name", to: "team#show"
	end

end
