namespace :logo_scraper do
  desc "TODO"
  task save_logos: :environment do
  	require "open-uri"
			# doc = Nokogiri::HTML(open("http://www.foxsports.com/college-football/teams"))
			doc = Nokogiri::HTML(open("http://www.foxsports.com/college-football/teams?group=3"))
			
			entries = doc.css(".wisfb_fullTeamStacked")
			
			entries.each do |entry|
				Logo.create(src: entry.css(".wisfb_logoImage")[0]["src"],
				name: entry.css("span")[0].text)
			end
			
  end

end
