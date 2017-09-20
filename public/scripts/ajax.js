function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajax_text").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://folk.ntnu.no/haavalo/ajax/test.txt", true);
    xhttp.send();
}