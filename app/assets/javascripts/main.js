$(document).on("ready", function() {
	$(".predicted-winner-header").empty();
	$(".confidence-level-header").empty();
	$(".team-stats-row").hide();
	$(".basic-team-info-row").hide();

	// Team Controller API Calls. In team.js
	$("#js-select-team1").on("change", function() {
		findInfoTeam1();
		$(".predicted-winner-header").text("Predicted Winner");
		$(".confidence-level-header").text("Confidence Level");
	});

	$("#js-select-team2").on("change", function() {
		findInfoTeam2();
		$(".predicted-winner-header").text("Predicted Winner");
		$(".confidence-level-header").text("Confidence Level");
		$(".team-stats-row").show();
		$(".basic-team-info-row").show();
	});

	// Bootstrap Login Modal
	$(".js-login").on("click", function() {
		event.preventDefault();
		$("#login-modal").modal("show");
	});
});


