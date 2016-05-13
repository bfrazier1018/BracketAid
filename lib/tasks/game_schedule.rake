namespace :game_schedule do
  desc "TODO"
  task save_games: :environment do
  	response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/tournaments/608152a4-cccc-4569-83ac-27062580099e/schedule.json?api_key=t8533xedsh9yewxfka46mq5u")
		body = response["rounds"]

		body.each do |league|
			league["bracketed"].each do |round|
				round["games"].each do |game|
					Game.create(
						title: game["title"],
						venue: game["venue"]["name"],
						city: game["venue"]["city"],
						state: game["venue"]["state"],
						home_team: game["home"]["name"],
						away_team: game["away"]["name"],
						)
				end
			end
		end
		
  end

end
