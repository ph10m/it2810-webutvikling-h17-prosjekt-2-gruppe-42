$(document).ready(function(){
	alert("Loading documentation from Google Drive with Ajax");
	$.ajax({
		url: "http://docs.google.com/document/d/e/2PACX-1vQYqV98XXr3M-FMcrwjHyA60SiwibFxY2hhIu0roHagXJtdrjKO3fGygsdVeqFRy0WaIA3jGPxZJgfd/pub",
		success: function(result){
			$("#doc").append(result);
		},
		error: function(){
			alert("Could not load file");
		}
	});
});
