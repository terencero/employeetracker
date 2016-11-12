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

var name = $("#nameinput").val().trim();
var role = $("#roleinput").val().trim();
var startDate = $("#dateinput").val().trim();
var rate = $("#rateinput").val().trim();

$("#addEmployee").on("click", function(){

});
