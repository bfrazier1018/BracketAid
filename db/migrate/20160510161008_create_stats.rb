class CreateStats < ActiveRecord::Migration
  def change
    create_table :stats do |t|
      t.string :name
      t.string :market
      t.float :paint_pts
      t.float :points
      t.float :turnovers
      t.float :free_throws_att
      t.float :field_goals_att
      t.float :off_rebounds
      t.float :two_points_att
      t.float :two_points_made
      t.float :rebounds
      t.float :three_points_made
      t.float :free_throws_made
      t.float :field_goals_made
      t.float :steals
      t.float :three_points_att
      t.float :opponent_paint_pts
      t.float :opponent_points
      t.float :opponent_field_goals_made
      t.float :opponent_field_goals_att
      t.float :opponent_three_points_att
      t.float :opponent_three_points_made

      t.timestamps null: false
    end
  end
end
