// For API Calls and Finding Team Info and Stats
function findInfoTeam1() {
	var teamName = $("#js-select-team1").val();

	$.ajax({
		url: `/api/master/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayInfoTeam1(data);
		},
		error: printError,
	});
};

function findInfoTeam2() {
	var teamName = $("#js-select-team2").val();

	$.ajax({
		url: `/api/master/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayInfoTeam2(data);
		},
		error: printError,
	});
};

function findScheduleTeam1() {
	var teamName = $("#js-select-team1").val();

	$.ajax({
		url: `/api/schedule/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayScheduleTeam1(data);
		},
		error: printError,
	});
};

function findScheduleTeam2() {
	var teamName = $("#js-select-team1").val();

	$.ajax({
		url: `/api/schedule/${teamName}`,
		success: function(data) {
			// console.log(data);
			displayScheduleTeam2(data);
		},
		error: printError,
	});
};


// ---------------------  ERROR FUNCTION ------------------------------
function printError(error) {
	console.log("ERROR");
	console.log(error.responseJSON);
};
