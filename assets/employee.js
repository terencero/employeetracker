var config = {
    apiKey: "AIzaSyCdPSUK2S4pKJaC_bM-I-ZRZH4PClMyv2Y",
    authDomain: "cbay-af8ee.firebaseapp.com",
    databaseURL: "https://cbay-af8ee.firebaseio.com",
    storageBucket: "cbay-af8ee.appspot.com",
    //messagingSenderId: "352407676079"
  };
  firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();

//initial values
var name = "";
var role = "";
var startDate = "";
var rate = 0;
var monthsWorked = 0;
var totalBilled = 0;


$(document).ready(function(){
	
$("#addEmployee").on("click", function(){
	name = $("#nameInput").val().trim();
	role = $("#roleInput").val().trim();
	startDate = $("#dateInput").val().trim();
	rate = $("#rateInput").val().trim();
	//monthsWorked = (2016 - parseInt(startDate.substr(4,7))) * 12 + (12-parseInt(startDate.substr(2,3)));
	//totalBilled = parseInt(rate) * monthsWorked;
	var convertedStartDate = moment(new Date(startDate));
	monthsWorked = moment(convertedStartDate).diff(moment(), "months");
	totalBilled = rate * monthsWorked;

	database.ref().push({
		employeeName: name,
		role: role,
		startDate: startDate,
		monthsWorked: monthsWorked,
		rate: rate,
		totalBilled: totalBilled,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

	$("#nameInput").empty();
	$("#roleInput").empty();
	$("#dateInput").empty();
	$("#rateInput").empty();
	return false;
});

database.ref().on("child_added", function(childSnapshot) {

	// Log everything that's coming out of snapshot
	console.log(childSnapshot.val());
	console.log(childSnapshot.val().employeeName);
	console.log(childSnapshot.val().role);
	console.log(childSnapshot.val().startDate);
	console.log(childSnapshot.val().monthsWorked);
	console.log(childSnapshot.val().rate);
	console.log(childSnapshot.val().totalBilled);
	console.log(childSnapshot.val().dateAdded);

	// Change the HTML to reflect added employee
	var newEmployee = $('<tr>');

	function populateEmployeeData(input){
		var employeeData = $("<th>");
		employeeData.html(input);
		newEmployee.append(employeeData);
	};
	populateEmployeeData(childSnapshot.val().employeeName);
	populateEmployeeData(childSnapshot.val().role);
	populateEmployeeData(childSnapshot.val().startDate);
	populateEmployeeData(childSnapshot.val().monthsWorked);
	populateEmployeeData(childSnapshot.val().rate);
	populateEmployeeData(childSnapshot.val().totalBilled);
	//newEmployee.html("<th>"+ childSnapshot.val().employeeName + "</th>");
	$("#dataTable").append(newEmployee);

// Handle the errors
}, function(errorObject) {

	console.log("Errors handled: " + errorObject.code);
});

});
//database.ref().orderByChild(“dateAdded”).limitToLast(1).on(“child_added”, function(snapshot){});