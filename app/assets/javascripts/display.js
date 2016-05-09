// ------------------ DISPLAY TEAM INFO ----------------------
function displayInfoTeam1(info) {
	$(".js-seed-team1").text(info.seed);
};

function displayInfoTeam2(info) {
	$(".js-seed-team2").text(info.seed);
};

function displayStatsTeam1(info) {
	var team = info.own_record.average;
	var opponent = info.opponents.average;

	$(".js-mascot1").text(info.name);
	$(".js-table-name-team1").text(info.market);
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
};

function displayStatsTeam2(info) {
	var team = info.own_record.average;
	var opponent = info.opponents.average;

	$(".js-mascot2").text(info.name);
	$(".js-table-name-team2").text(info.market);
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
};

function displayRankTeam1(info) {
	$(".js-wins-team1").text(info.wins);
	$(".js-losses-team1").text(info.losses);
	$(".js-rank-team1").text(info.rank);
	$(".js-sos-team1").text(info.sos);
	$(".js-rpi-team1").text(info.rpi);
};

function displayRankTeam2(info) {
	$(".js-wins-team2").text(info.wins);
	$(".js-losses-team2").text(info.losses);
	$(".js-rank-team2").text(info.rank);
	$(".js-sos-team2").text(info.sos);
	$(".js-rpi-team2").text(info.rpi);
}; 