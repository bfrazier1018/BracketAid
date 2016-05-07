$(document).on("ready", function() {
	$("#first-team").on("change", findTeam )
});

function findTeam() {

	$.ajax({
		url: `/api/team`,
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
