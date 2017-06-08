alert("You are connected");

var addButton = document.querySelector("#addButton");
var body = document.querySelector("body");
var divFormBox = document.querySelector("#formBoxDisplay");
//var formBoxDisplay = document.createElement("div");

addButton.addEventListener("click", function(){
	console.log("add Button clicked");
	divFormBox.classList.toggle("formBox");
	
	//formBoxDisplay.style.display = "none";
});

