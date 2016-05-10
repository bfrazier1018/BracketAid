// ------------------ DISPLAY TEAM INFO ----------------------
function displayInfoTeam1(info) {
	var user = info.user;
	var rank = info.rank;
	$(".js-mascot1").text(info.stats.name);
	$(".js-wins-team1").text(rank.wins);
	$(".js-losses-team1").text(rank.losses);
	$(".js-seed-team1").text(user.seed);
	displayStatsTeam1(info);
};

function displayInfoTeam2(info) {
	var user = info.user;
	var rank = info.rank;
	$(".js-mascot2").text(info.stats.name);
	$(".js-wins-team2").text(rank.wins);
	$(".js-losses-team2").text(rank.losses);
	$(".js-seed-team2").text(user.seed);
	displayStatsTeam2(info);
};

// ----------------- DISPLAY TEAM STATS IN TABLE ---------------------
function displayStatsTeam1(info) {
	var team = info.stats.own_record.average;
	var opponent = info.stats.opponents.average;

	$(".js-rank-team1").text(info.rank.rank);
	$(".js-sos-team1").text(info.rank.sos);
	$(".js-rpi-team1").text(info.rank.rpi);
	$(".js-table-name-team1").text(info.user.name);
	$(".js-ppg-team1").text(team.points);
	$(".js-opponent-ppg-team1").text(opponent.points);
	$(".js-paint-points-team1").text(team.paint_pts);
	$(".js-opponent-paint-points-team1").text(opponent.paint_pts);
	$(".js-threes-team1").text(team.three_points_made);
	$(".js-rebounds-team1").text(team.rebounds);
	$(".js-offensive-rebounds-team1").text(team.off_rebounds);
	$(".js-steals-team1").text(team.steals);
	$(".js-turnovers-team1").text(team.turnovers);
	$(".js-free-throws-team1").text((team.free_throws_made / team.free_throws_att).toFixed(2) * 100);
	$(".js-field-goal-team1").text((team.field_goals_made / team.field_goals_att).toFixed(2) * 100)
	$(".js-opponent-field-goal-team1").text((opponent.field_goals_made / opponent.field_goals_att).toFixed(2) * 100)
	$(".js-opponent-threes-team1").text(opponent.three_points_made);
	$(".js-scoring-margin-team1").text((team.points - opponent.points).toFixed(2));
};

function displayStatsTeam2(info) {
	var team = info.stats.own_record.average;
	var opponent = info.stats.opponents.average;

	$(".js-rank-team2").text(info.rank.rank);
	$(".js-sos-team2").text(info.rank.sos);
	$(".js-rpi-team2").text(info.rank.rpi);
	$(".js-table-name-team2").text(info.user.name);
	$(".js-ppg-team2").text(team.points);
	$(".js-opponent-ppg-team2").text(opponent.points);
	$(".js-paint-points-team2").text(team.paint_pts);
	$(".js-opponent-paint-points-team2").text(opponent.paint_pts);
	$(".js-threes-team2").text(team.three_points_made);
	$(".js-rebounds-team2").text(team.rebounds);
	$(".js-offensive-rebounds-team2").text(team.off_rebounds);
	$(".js-steals-team2").text(team.steals);
	$(".js-turnovers-team2").text(team.turnovers);
	$(".js-free-throws-team2").text((team.free_throws_made / team.free_throws_att).toFixed(2) * 100);
	$(".js-field-goal-team2").text((team.field_goals_made / team.field_goals_att).toFixed(2) * 100)
	$(".js-opponent-field-goal-team2").text((opponent.field_goals_made / opponent.field_goals_att).toFixed(2) * 100)
	$(".js-opponent-threes-team2").text(opponent.three_points_made);
	$(".js-scoring-margin-team2").text((team.points - opponent.points).toFixed(2));

};






