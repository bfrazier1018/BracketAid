class CreateRanks < ActiveRecord::Migration
  def change
    create_table :ranks do |t|
      t.string :name
      t.string :team_id
      t.integer :wins
      t.integer :losses
      t.float :sos
      t.float :rpi
      t.integer :rank

      t.timestamps null: false
    end
  end
end
