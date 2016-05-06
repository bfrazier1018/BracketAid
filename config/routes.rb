Rails.application.routes.draw do
  
	get "/", to: "site#home"
	
	scope "/api" do  
		resources :team, only: [:index, :show]
	end

end
