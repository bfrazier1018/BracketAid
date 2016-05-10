$(document).on("ready", function() {
	// Team Controller API Calls. In team.js
	$("#js-select-team1").on("change", findInfoTeam1);
	$("#js-select-team2").on("change", findInfoTeam2);

	// Bootstrap Login Modal
	$(".js-login").on("click", function() {
		event.preventDefault();
		$("#login-modal").modal("show");
	});
	// // Create Team and Rank API Call. DATABASE USE ONLY
	// $("#js-select-team1").on("change", setDatabase) 
});


