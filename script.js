var nodeList = document.getElementsByTagName("LI");
var i;
var textInput = document.getElementById("myInput");


//ingresar con tecla enter
textInput.addEventListener("keyup", function(event) {

    if (event.keyCode === 13) {

        event.preventDefault();

        document.getElementById("myBtn").click();
    }
});

for (i = 0; i < nodeList.length; i++) {

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); // unicode para signo de multiplicar

    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

        var div = this.parentElement;
        div.style.display = "none";

    }
}

function newElement() {
    var li = document.createElement("LI");
    var inputValue = document.getElementById("myInput").value;

    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
        alert("You must write something");
    } else {
        document.getElementById("myUl").appendChild(li);
        li.className = "list-group-item";
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {

        close[i].onclick = function() {

            var div = this.parentElement;
            div.style.display = "none";

        }
    }


}