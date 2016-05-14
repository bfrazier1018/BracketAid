class AddTeam1ToGames < ActiveRecord::Migration
  def change
    add_column :games, :team_1, :string
  end
end
