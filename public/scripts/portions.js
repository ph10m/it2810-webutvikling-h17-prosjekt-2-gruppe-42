// jquery loops: https://stackoverflow.com/a/4735360

var defPortionValues = [];
var defPortions = -1;

function dynamicPortions(defaultPortions){
	$('.dynamic-amount').each(function(i, obj) {
		defPortionValues.push(obj.textContent);
	});
	defPortions = defaultPortions;
	console.log("Default portions: " + defPortions);
	console.log(defPortionValues);
    $("#portions_view").on("change paste keyup", function() {
        updatePortions();
    });
}


$(document).ready(function() {
	$('.decrease').click(function(){
		$("#portions_view").val(function(i,oldval) {
			return oldval>1 ? --oldval : oldval;
		});
		updatePortions();
	});
    $('.increase').click(function() {
		$("#portions_view").val(function(i,oldval) {
			return ++oldval;
		});
		updatePortions();
	});
});

function updatePortions(){
	let currentVal = eval($("#portions_view").val());
	let scaling = currentVal/defPortions;
	console.log("Scaling: " + scaling);
	$('.dynamic-amount').each(function(i, obj) {
		var scaledVal = 0;
		if (obj.textContent > 100) {
			scaledVal = Math.ceil(defPortionValues[i]*scaling);
		}
		else {
			scaledVal = (Math.round((defPortionValues[i]*scaling)*2)/2).toFixed(1)
		}
		obj.textContent = scaledVal;
	});
}
