function findGameTeam1() {
	var teamName = $(".js-game-name-team1").text();

	$.ajax({
		url: `/api/master/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayInfoTeam1(data);
			findGameScheduleTeam1();
			$(".predicted-winner-header").text("Predicted Winner");
			$(".confidence-level-header").text("Confidence Level");
		},
		error: printError,
	});
};

function findGameTeam2() {
	var teamName = $(".js-game-name-team2").text();

	$.ajax({
		url: `/api/master/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayInfoTeam2(data);
			findGameScheduleTeam2();
			$(".predicted-winner-header").text("Predicted Winner");
			$(".confidence-level-header").text("Confidence Level");
		},
		error: printError,
	});
};

function findGameScheduleTeam1() {
	var teamName = $(".js-game-name-team1").text();

	$.ajax({
		url: `/api/schedule/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayScheduleTeam1(data);
		},
		error: printError,
	});
};

function findGameScheduleTeam2() {
	var teamName = $(".js-game-name-team2").text();

	$.ajax({
		url: `/api/schedule/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayScheduleTeam2(data);
		},
		error: printError,
	});
};