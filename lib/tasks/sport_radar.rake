namespace :sport_radar do
  desc "TODO"
  task save_stats: :environment do

  	teams_id = Team.all.pluck(:team_id)
		 teams_id.each do |id|
			response = HTTParty.get("http://api.sportradar.us/ncaamb-t3/seasontd/2015/REG/teams/#{id}/statistics.json?api_key=kd5anag94k7zegqgzeyyxg4j")
			Stat.create(
				name: response["name"], 
				market: response["market"], 
				paint_pts: response["own_record"]["average"]["paint_pts"], 
				points: response["own_record"]["average"]["points"], 
				turnovers: response["own_record"]["average"]["turnovers"],
				free_throws_att: response["own_record"]["average"]["free_throws_att"], 
				field_goals_att: response["own_record"]["average"]["field_goals_att"],
				off_rebounds: response["own_record"]["average"]["off_rebounds"], 
				two_points_att: response["own_record"]["average"]["two_points_att"],
				two_points_made: response["own_record"]["average"]["two_points_made"], 
				rebounds: response["own_record"]["average"]["rebounds"],
				three_points_made: response["own_record"]["average"]["three_points_made"], 
				free_throws_made: response["own_record"]["average"]["free_throws_made"],
				field_goals_made: response["own_record"]["average"]["field_goals_made"], 
				steals: response["own_record"]["average"]["steals"],
				three_points_att: response["own_record"]["average"]["three_points_att"], 
				opponent_paint_pts: response["opponents"]["average"]["paint_pts"],
				opponent_points: response["opponents"]["average"]["points"],
				opponent_field_goals_made: response["opponents"]["average"]["field_goals_made"],
				opponent_field_goals_att: response["opponents"]["average"]["field_goals_att"],
				opponent_three_points_att: response["opponents"]["average"]["three_points_att"],
				opponent_three_points_made: response["opponents"]["average"]["three_points_made"]
				)
			
			sleep 2
		end
  end
		
end
