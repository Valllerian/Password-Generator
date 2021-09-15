
var generateBtn = document.querySelector("#generate");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialSymbols = ["!", "*", "}", "{", "[", "]", "/", "#", "%", "@", "(", ")", "_", ";", ":", "<", ">", "&", "?", "+", "`", "|", "-", "="];

var finalPassword = [];

var lowercaseConfirmed = "";
var uppercaseConfirmed = "";
var numericConfirmed = "";
var specialConfirmed = "";


var arrayPassword = function() {
  if (lowercaseConfirmed) {
    finalPassword = finalPassword.concat(lowercase);
  }
  if (uppercaseConfirmed){
    finalPassword = finalPassword.concat(uppercase);
  }
  if (numericConfirmed){
    finalPasswordConfirmed = finalPassword.concat(numeric);
  }
  if (specialConfirmed){
    finalPassword = finalPassword.concat(special);
  }
  return finalPassword;

};

function randomChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function lengthPassword() {
      var length = parseInt(prompt("Please, type in the lenght of your password (a number 8-128)","0"), 10);
      if (length > 128 ){
        alert("This isn`t a valid number! Please, input a number 8 - 126");
      }
      if (length < 8 ){
        alert("This isn`t a valid number! Please, input a number 8 - 126");
      }
      else {
        
        generatePassword();
      }
      };

function generatePassword() {
      var lowercaseConfirmed = confirm("Would you like to include lowercase characters? ");
      var uppercaseConfirmed = confirm("Would you like to include uppercase characters? ");
      var numericConfirmed = confirm("Would you like to include numeric characters? ");
      var specialConfirmed = confirm("Would you like to include srecial symbols? ");

    if (lowercaseConfirmed === false && uppercaseConfirmed === false && numericConfirmed === false && specialConfirmed === false ) {
      alert("At least one option has to be selected!");
    }
    
    arrayPassword();
    for (i = 0; i <= length; i++) {
      finalPassword = finalPassword.concat(randomChar(finalPassword));
    }
    
    return finalPassword;
};
      

function writePassword() {
  var finalPassword = lengthPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
  
}
    

  // 
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
