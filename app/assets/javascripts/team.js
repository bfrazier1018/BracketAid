$(document).on("ready", function() {
	$("#js-select-team1").on("change", findStatsTeam1);
	$("#js-select-team2").on("change", findStatsTeam2);
	$("#js-select-team1").on("change", findRankTeam1);
	$("#js-select-team2").on("change", findRankTeam2);
	$("#js-select-team1").on("change", findInfoTeam1);
	$("#js-select-team2").on("change", findInfoTeam2);

	$(".js-login").on("click", function() {
		event.preventDefault();
		$("#login-modal").modal("show");
	});

	// $("#js-select-team1").on("change", setDatabase) // FOR DATABASE USE ONLY
});

// ----------------- FIND TEAM INFO --------------------------
function findInfoTeam1() {
	var teamName  = $("#js-select-team1").val();

	$.ajax({

		url: `/api/info/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayInfoTeam1(data);
		},
		error: printError,
	});
};

function findInfoTeam2() {
	var teamName  = $("#js-select-team2").val();

	$.ajax({

		url: `/api/info/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayInfoTeam2(data);
		},
		error: printError,
	});
};

function findStatsTeam1() {
	var teamName = $("#js-select-team1").val();

	$.ajax({

		url: `/api/team/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayStatsTeam1(data)
		},
		error: printError,
	});
};

function findStatsTeam2() {
	var teamName = $("#js-select-team2").val();

	$.ajax({

		url: `/api/team/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayStatsTeam2(data);
		},
		error: printError,
	});
};

function findRankTeam1() {
	var teamName = $("#js-select-team1").val();

	$.ajax({

		url: `/api/rank/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayRankTeam1(data);
		},
		error: printError,
	});
};

function findRankTeam2() {
	var teamName = $("#js-select-team2").val();

	$.ajax({

		url: `/api/rank/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayRankTeam2(data);
		},
		error: printError,
	});
};

// ---------------------  ERROR FUNCTION ------------------------------
function printError(error) {
	console.log("ERROR");
	console.log(error.responseJSON);
};

// ------------------ FOR DATABASE USE ONLY ----------------------------
function setDatabase() {
	
	$.ajax({
		url: `api/database`,
		success: function(data) {
			console.log("success");
		},
		error: printError,
	});
} ;
