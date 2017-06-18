var addButton = document.querySelector("#addButton");
var divFormBox = document.querySelector("#formBoxDisplay");
var label1 = document.querySelector("label");
//var label2 = document.querySelector(".label2");
//var label3 = document.querySelector(".label3");
var userInput = document.querySelector("#textBox");

addButton.addEventListener("click", function(){
	console.log("add Button clicked");
	divFormBox.classList.toggle("formBox");

	divFormBox.classList.toggle("label1");
	if (label1.style.display === "block"){
		label1.style.display = "none";
	} else {
		label1.style.display = "block";
	}

	divFormBox.classList.toggle("userInput");
	if (userInput.style.display === "block"){
		userInput.style.display = "none";
	} else {
		userInput.style.display = "block";
	}

	/*divFormBox.classList.toggle("label2");
	label2.textContent = "Enter your profile name here:";
	if (label2.style.display === "block"){
		label2.style.display = "none";
	} else {
		label2.style.display = "block";
	}

	divFormBox.classList.toggle("label3");
	label3.textContent = "This is placeholding text:";
	if (label3.style.display === "block"){
		label3.style.display = "none";
	} else {
		label3.style.display = "block";
	}*/
});

