$(document).on("ready", function() {
	$("#first-team").on("change", teamStats )
});

function teamStats() {

var teamName = $("#first-team").val();

	$.ajax({

		url: `/api/team/${teamName}`,
		success: function(data) {
			console.log(data);
		},
		error: printError,
	});
};

function printError(error) {
	console.log("ERROR");
	console.log(error);
};
