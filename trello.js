var addButton = document.querySelector("#addButton");
var divFormBox = document.querySelector("#formBoxDisplay");
var label1 = document.querySelector("label");
var label2 = document.querySelector(".label2");
var label3 = document.querySelector(".label3");
var userInput = document.querySelector("#textBox");
var userName = document.querySelector("#userName");
//var userFullName = document.querySelector("#fullName");
var submitButton = document.querySelector("#submitButton");

addButton.addEventListener("click", function(){
	console.log("add Button clicked");
	divFormBox.classList.toggle("formBox");

	//Labels 1-3 for the form
	divFormBox.classList.toggle("label1");
	if (label1.style.display === "block"){
		label1.style.display = "none";
	} else {
		label1.style.display = "block";
	}

	divFormBox.classList.toggle("label2");
	if (label2.style.display === "block"){
		label2.style.display = "none";
	} else {
		label2.style.display = "block";
	}

	divFormBox.classList.toggle("label3");
	if (label3.style.display === "block"){
		label3.style.display = "none";
	} else {
		label3.style.display = "block";
	}

	//Text fields for users to enter their information
	divFormBox.classList.toggle("userInput");
	if (userInput.style.display === "block"){
		userInput.style.display = "none";
	} else {
		userInput.style.display = "block";
	}

	divFormBox.classList.toggle("UserName");
	if (userName.style.display === "block"){
		userName.style.display = "none";
	} else {
		userName.style.display = "block";
	}


	divFormBox.classList.toggle("submitButton");
	if (submitButton.style.display === "block"){
		submitButton.style.display = "none";
	} else {
		submitButton.style.display = "block";
	}
	/*divFormBox.classList.toggle("label2");
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

