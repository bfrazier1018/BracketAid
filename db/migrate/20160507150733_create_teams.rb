class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :team_id
      t.string :name
      t.integer :seed

      t.timestamps null: false
    end
  end
end
