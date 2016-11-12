var config = {
    apiKey: "AIzaSyCdPSUK2S4pKJaC_bM-I-ZRZH4PClMyv2Y",
    authDomain: "cbay-af8ee.firebaseapp.com",
    databaseURL: "https://cbay-af8ee.firebaseio.com",
    storageBucket: "cbay-af8ee.appspot.com",
    messagingSenderId: "352407676079"
  };
  firebase.initializeApp(config);


// Create a variable to reference the database

var database = firebase.database();

var name = $("#nameInput").val().trim();
var role = $("#roleInput").val().trim();
var startDate = $("#dateInput").val().trim();
var rate = $("#rateInput").val().trim();

$("#addEmployee").on("click", function(){

});
