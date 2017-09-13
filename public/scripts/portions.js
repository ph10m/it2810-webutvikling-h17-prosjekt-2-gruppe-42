// <button class="portions reduce">-</button>
// <input class="portions_view" type="text" value="<%= DefaultPortions %>"></input>
// <button class="portions increase">+</button>
//
$(document).ready(function() {
    $("#portions_view").on("change paste keyup", function() {
        updatePortions();
    });
});

function decrease() {
    let boxval = $("#portions_view").val();
	if(boxval>1) {
		boxval -= 1;
	}
	$("#portions_view").val(boxval);
	updatePortions();
}

function increase() {
    let boxval = eval($("#portions_view").val());
	boxval += 1;
    $("#portions_view").val(boxval);
    updatePortions();
}



function updatePortions(){
	let boxval = $("#portions_view").val();
	console.log(boxval);
}
