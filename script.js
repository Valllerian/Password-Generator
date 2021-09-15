// var assigned to the button to activate the event listener

var generateBtn = document.querySelector("#generate");

// Arrays with characters for password generator:

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialSymbols = ["!", "*", "}", "{", "[", "]", "/", "#", "%", "@", "(", ")", "_", ";", ":", "<", ">", "&", "?", "+", "`", "|", "-", "="];

// variables to store the value output from functions below

var finalPassword = "";
var passwordArray = [];

// variable to store the characters if the prompt is confirmed 

var lowercaseConfirmed = [];
var uppercaseConfirmed = [];
var numericConfirmed = [];
var specialConfirmed = [];

// Creating a function to modify/merge passwordArray var

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.  (MDN)

var arrayPassword = function() {
  if (lowercaseConfirmed) {
    passwordArray = passwordArray.concat(letters);
  }
  if (uppercaseConfirmed){
    passwordArray = passwordArray.concat(bigLetters);
  }
  if (numericConfirmed){
    passwordArray = passwordArray.concat(numbers);
  }
  if (specialConfirmed){
    passwordArray = passwordArray.concat(specialSymbols);
  }
  return passwordArray;
};

// Generating a random line of characters from an array 
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive) (w3schools)

function randomiser(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// main function for password creation :

function generatePassword() {
      
  // first prompt to select the password lenght. It would print an alert if lenght is not 8 to 128

      var length = prompt("Please, type in the lenght of your password (a number from 8 to 128)");
      if (length > 128 ){
        alert("This isn`t a valid number! Please, input a number 8 - 128");
        return;
      }
      if (length < 8 ){
        alert("This isn`t a valid number! Please, input a number 8 - 128");
        return;
      }
      // If lenght is valid then next prompts would ask about what characters will be inluded 

      lowercaseConfirmed = confirm("Would you like to include lowercase characters? ");
      uppercaseConfirmed = confirm("Would you like to include uppercase characters? ");
      numericConfirmed = confirm("Would you like to include numeric characters? ");
      specialConfirmed = confirm("Would you like to include special symbols? ");

      // if none are selected an alert would be printed

    if (lowercaseConfirmed === false && uppercaseConfirmed === false && numericConfirmed === false && specialConfirmed === false ) {
      alert("At least one option has to be selected!");
      return;
    }
    
    // Creating final password from the characters selected to the password array using length from the first prompt 

    arrayPassword();
    for (i = 0; i <= length; i++) {
      finalPassword = finalPassword.concat(randomiser(passwordArray));
    }
    
    return finalPassword;
};
      
// function that prints final password on the page (final password is assigned as a value to the html element with ID password)

function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
  
}
    
// event listener that activates function  on button click 

generateBtn.addEventListener("click", writePassword);