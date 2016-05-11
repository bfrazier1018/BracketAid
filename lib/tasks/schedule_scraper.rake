namespace :schedule_scraper do
  desc "TODO"
  task save_schedule: :environment do
  	require "open-uri"
			doc = Nokogiri::HTML(open("http://espn.go.com/mens-college-basketball/teams"))
			
			entries = doc.css(".mod-content")
			entry = entries.css("li")
			
			entry.each do |entry| 
				Schedule.create(name: entry.css("a")[0].text,
				 href: "http://espn.go.com#{entry.css('a')[2]['href']}"
				 )
			end
  end

end
