class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :venue
      t.string :city
      t.string :state
      t.string :home_team
      t.string :away_team

      t.timestamps null: false
    end
  end
end
