var profilePic;
var userName;
var fullName;

var profiles = [
{
	url: "www.google.com",
	username: "@onlydesign",
	fullname:"Shawn Garner"
}, 
{
	url: "www.google.com",
	username: "@onlydesign",
	fullname:"Shawn Garner"
},
{
	url: "www.google.com",
	username: "@onlydesign",
	fullname:"Shawn Garner"
},
{
	url: "www.google.com",
	username: "@onlydesign",
	fullname:"Shawn Garner"
},
{
	url: "www.google.com",
	username: "@onlydesign",
	fullname:"Shawn Garner"
},
{
	url: "www.google.com",
	username: "@onlydesign",
	fullname:"Shawn Garner"
},
{
	url: "www.google.com",
	username: "@onlydesign",
	fullname:"Shawn Garner"
},
];

// Prints initial array
console.log("initial array:");
console.log(profiles);

//Show/hide form box
$("#addButton").on("click", function(){
	$("#formBoxDisplay").toggleClass("formBox");
	$("label").toggle();
	$("#textBox").toggle();
	$("#submitButton").toggle();
});

//Store info user entered for new profile
$("#submitButton").on("click", function(){
	var profilePic = $("#textBox").val();
	$("#textBox").val("");
	var userName = $("#userName").val();
	$("#userName").val("");
	var fullName = $("#fullName").val();
	$("#fullName").val("");

	//hides the form and nested elements after the submit button is clicked
	$("#formBoxDisplay").toggleClass("formBox");
	$("label").toggle();
	$("#textBox").toggle();
	$("#submitButton").toggle();

	// Adds a new object of user information into profiles array
	if(profilePic !== "" && userName !== "" && fullName !== ""){
		profiles.push({
		url: profilePic,
		username: userName,
		fullname: fullName
	});
	} else {
		return alert("Invalid form entry.");
	}

	//Add/Remove classes to add new user profiles
	$("div.box8").removeClass("box8").addClass("newUserBox");
	$("h6.newCardText").remove();
	$("div.newUserBox i.fa-user-o").remove();
	$("i.fa-circle-thin").remove();
	$("i.fa-plus-circle").remove();


	//Adds user's info to new profile
	$("div.newUserBox").append("<img src =" + profilePic + ">");
	$("div.newUserBox").append("<h3>" + fullName + "</h3>");
	$("div.newUserBox").append("<h5> " + userName + " </h5>");

	//Adds icons on user's profile
	$("div.newUserBox").append("<i class='fa fa-pencil' id='pencilIcon'>"+"</i>");
	$("div.newUserBox").append("<i class='fa fa-bell-o' id='bellIcon'>"+"</i>");
	$("div.newUserBox").append("<i class='fa fa-trash-o' id='trashIcon'>"+"</i>");

	//Creates two tabs on the bottom of user's profile
	$("div.newUserBox").append("<section class='taskStatus'> " + "</section>");
	$("div.newUserBox").append("<section class='tab1'> " + "</section>");
	$("div.newUserBox").append("<section class='tab2'> " + "</section>");

	//Adds icons to left tab
	$("div.newUserBox section.tab1").append("<i class='fa fa-address-card-o'> " + "</i>");
	$("div.newUserBox section.tab1").append("<h6 class='cardTab'> " + "CARDS " + "</h6>");

	//Adds icons to right tab
	$("div.newUserBox section.tab2").append("<i class='fa fa-user-o'> " + "</i>");
	$("div.newUserBox section.tab2").append("<h6 class='profileTab'> " + "PROFILE " + "</h6>");
	
	//Updates the number of team members after a new profile is created
	$("span").text("(" + profiles.length + ")");
	

	console.log("User info: " + profilePic + "\n" + userName + "\n" + fullName);

	// Shows updated the array of profiles
	console.log("updated array:");
	console.log(profiles);
});


//drop down menu
