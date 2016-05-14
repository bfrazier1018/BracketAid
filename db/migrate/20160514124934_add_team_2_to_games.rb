class AddTeam2ToGames < ActiveRecord::Migration
  def change
    add_column :games, :team_2, :string
  end
end
