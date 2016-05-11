# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160511020938) do

  create_table "logos", force: :cascade do |t|
    t.string   "name"
    t.string   "src"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ranks", force: :cascade do |t|
    t.string   "name"
    t.string   "team_id"
    t.integer  "wins"
    t.integer  "losses"
    t.float    "sos"
    t.float    "rpi"
    t.integer  "rank"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stats", force: :cascade do |t|
    t.string   "name"
    t.string   "market"
    t.float    "paint_pts"
    t.float    "points"
    t.float    "turnovers"
    t.float    "free_throws_att"
    t.float    "field_goals_att"
    t.float    "off_rebounds"
    t.float    "two_points_att"
    t.float    "two_points_made"
    t.float    "rebounds"
    t.float    "three_points_made"
    t.float    "free_throws_made"
    t.float    "field_goals_made"
    t.float    "steals"
    t.float    "three_points_att"
    t.float    "opponent_paint_pts"
    t.float    "opponent_points"
    t.float    "opponent_field_goals_made"
    t.float    "opponent_field_goals_att"
    t.float    "opponent_three_points_att"
    t.float    "opponent_three_points_made"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.string   "team_id"
    t.integer  "seed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "name"
    t.string   "favorite_team"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
