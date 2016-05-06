$(document).on("ready", function() {
	$("#team1").on("change", findTeam )

});

function findTeam() {
var input = $("#team1").val();
	$.ajax({
		
		url: `http://api.sportradar.us/ncaamb-t3/teams/${input}/profile.json?api_key=t8533xedsh9yewxfka46mq5u`,
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