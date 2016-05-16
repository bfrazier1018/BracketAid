namespace :find_records do
  desc "TODO"
  task save_records: :environment do

  	# Find and Save SOS, Wins, Losses, RPI, Name, Team Id
		response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/polls/rpi/2015/rankings.json?api_key=kd5anag94k7zegqgzeyyxg4j")
		body = response.parsed_response["rankings"]
		
		body.each do |team|
			Rank.create(name: team["market"], rank: team["rank"], wins: team["wins"], losses: team["losses"], sos: team["sos"], rpi: team["rpi"], team_id: team["id"])
		end		
		
  end

end
