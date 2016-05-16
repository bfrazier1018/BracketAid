namespace :find_teams do
  desc "TODO"
  task save_teams: :environment do

  	# Find and Save teams Id, Name, and Tourny Rank to Database
		response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/tournaments/608152a4-cccc-4569-83ac-27062580099e/summary.json?api_key=kd5anag94k7zegqgzeyyxg4j")
		body = response.parsed_response["brackets"]
		
		body.each do |bracket|
			bracket["participants"].each do |team|
				Team.create(name: team["market"], team_id: team["id"], seed: team["seed"])
			end
		end
  end

end
