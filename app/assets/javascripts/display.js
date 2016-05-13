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

	$(".js-rank-team1").text(info.rank.rank);
	$(".js-sos-team1").text(info.rank.sos);
	$(".js-rpi-team1").text(info.rank.rpi);
	$(".js-table-name-team1").text(info.user.name);
	$(".js-ppg-team1").text(info.stats.points);
	$(".js-opponent-ppg-team1").text(info.stats.opponent_points);
	$(".js-paint-points-team1").text(info.stats.paint_pts);
	$(".js-opponent-paint-points-team1").text(info.stats.opponent_paint_pts);
	$(".js-threes-team1").text(info.stats.three_points_made);
	$(".js-rebounds-team1").text(info.stats.rebounds);
	$(".js-offensive-rebounds-team1").text(info.stats.off_rebounds);
	$(".js-steals-team1").text(info.stats.steals);
	$(".js-turnovers-team1").text(info.stats.turnovers);
	$(".js-free-throws-team1").text((info.stats.free_throws_made / info.stats.free_throws_att).toFixed(2) * 100);
	$(".js-field-goal-team1").text((info.stats.field_goals_made / info.stats.field_goals_att).toFixed(2) * 100);
	$(".js-opponent-field-goal-team1").text((info.stats.opponent_field_goals_made / info.stats.opponent_field_goals_att).toFixed(2) * 100);
	$(".js-opponent-threes-team1").text(info.stats.opponent_three_points_made);
	$(".js-scoring-margin-team1").text((info.stats.points - info.stats.opponent_points).toFixed(2));
	$(".js-final-score-team1").text(info.score[0]);
	// if (info.schedule !== null) {
	// 	$(".js-schedule-team1").prop("href", info.schedule.href);
	// } else {
	// 	$(".js-schedule-team1").prop("href", "http://espn.go.com/mens-college-basketball/teams");
	// }

	if (info.logo !== null) {
		$(".js-logo-team1").prop("src", info.logo.src);
	}	else {
		$(".js-logo-team1").prop("src", "https://www.nextflywebdesign.com/wp-content/uploads/2016/03/March-Madness-Logo-2.jpg")
	}

	displayWinner(info);
};

function displayStatsTeam2(info) {
	
	$(".js-rank-team2").text(info.rank.rank);
	$(".js-sos-team2").text(info.rank.sos);
	$(".js-rpi-team2").text(info.rank.rpi);
	$(".js-table-name-team2").text(info.user.name);
	$(".js-ppg-team2").text(info.stats.points);
	$(".js-opponent-ppg-team2").text(info.stats.opponent_points);
	$(".js-paint-points-team2").text(info.stats.paint_pts);
	$(".js-opponent-paint-points-team2").text(info.stats.opponent_paint_pts);
	$(".js-threes-team2").text(info.stats.three_points_made);
	$(".js-rebounds-team2").text(info.stats.rebounds);
	$(".js-offensive-rebounds-team2").text(info.stats.off_rebounds);
	$(".js-steals-team2").text(info.stats.steals);
	$(".js-turnovers-team2").text(info.stats.turnovers);
	$(".js-free-throws-team2").text((info.stats.free_throws_made / info.stats.free_throws_att).toFixed(2) * 100);
	$(".js-field-goal-team2").text((info.stats.field_goals_made / info.stats.field_goals_att).toFixed(2) * 100);
	$(".js-opponent-field-goal-team2").text((info.stats.opponent_field_goals_made / info.stats.opponent_field_goals_att).toFixed(2) * 100);
	$(".js-opponent-threes-team2").text(info.stats.opponent_three_points_made);
	$(".js-scoring-margin-team2").text((info.stats.points - info.stats.opponent_points).toFixed(2));
	$(".js-final-score-team2").text(info.score[0]);
	// if (info.schedule !== null) {
	// 	$(".js-schedule-team2").prop("href", info.schedule.href);
	// } else {
	// 	$(".js-schedule-team2").prop("href", "http://espn.go.com/mens-college-basketball/teams");
	// }

	if (info.logo !== null) {
		$(".js-logo-team2").prop("src", info.logo.src);
	}	else {
		$(".js-logo-team2").prop("src", "https://www.nextflywebdesign.com/wp-content/uploads/2016/03/March-Madness-Logo-2.jpg")
	}
	displayWinner(info);
};

function displayWinner() {
	if ($(".js-final-score-team1").text() > $(".js-final-score-team2").text() ) {
		$(".js-predicted-winner").text($("#js-select-team1").val());
	} else if ($(".js-final-score-team1").text() === $(".js-final-score-team2").text()) {
		$(".js-predicted-winner").text("TIE");
	} else if (($(".js-final-score-team2").text() > $(".js-final-score-team1").text() )) {
		$(".js-predicted-winner").text($("#js-select-team2").val());
	};
	displayConfidenceLevel();
};

function displayConfidenceLevel() {
	var difference = Math.abs(($(".js-final-score-team1").text() - $(".js-final-score-team2").text()));
	// console.log(difference);
	if (difference < 0.5) {
		$(".js-confidence-level").text("Flip a Coin");
	} else if (difference >= 0.5 && difference < 1.3 ) {
		$(".js-confidence-level").text("Fairly Confident");
	} else if (difference >= 1.3 && difference < 3.0) {
		$(".js-confidence-level").text("Very Confident");
	} else {
		$(".js-confidence-level").text("Bet the House");
	}
};

function displayScheduleTeam1(games) {
	$(".js-schedule-modal-team1").empty();
	$(".schedule-modal-name-team1").text($("#js-select-team1").val());

	games.forEach(function(game) {
		var html = `
		<tr>
			<td>${game.date}</td>
			<td>${game.opponent}</td>
			<td>${game.result} ${game.score}</td>
		</tr>`;
	
		$(".js-schedule-modal-team1").append(html);
	});

};

function displayScheduleTeam2(games) {
	$(".js-schedule-modal-team2").empty();
	$(".schedule-modal-name-team2").text($("#js-select-team2").val());

	games.forEach(function(game) {
		var html = `
		<tr>
			<td>${game.date}</td>
			<td>${game.opponent}</td>
			<td>${game.result} ${game.score}</td>
		</tr>`;
	
		$(".js-schedule-modal-team2").append(html);
	});

};


