$(document).on("ready", function() {
	$("#team1").on("change", findTeam )
});

function findTeam() {

	$.ajax({
		url: `api/teams/id`,
		success: function(data) {
			console.log(data);
		},
		error: error,
	});
};

function error(error) {
	console.log("ERROR");
	console.log(error.responseJSON);
};