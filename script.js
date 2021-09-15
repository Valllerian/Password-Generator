
var generateBtn = document.querySelector("#generate");
var newPassword = "";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialSymbols = ["!", "*", "}", "{", "[", "]", "/", "#", "%", "@", "(", ")", "_", ";", ":", "<", ">", "&", "?", "+", "`", "|", "-", "="];

var finalPassword = [];


var arrayPassword = function() {
  if ( lowercase === true){
    finalPassword = finalPassword.concat(lowercase);
  }
  if ( uppercase === true){
    finalPassword = finalPassword.concat(uppercase);
  }
  if ( numeric === true){
    finalPassword = finalPassword.concat(numeric);
  }
  if ( special === true){
    finalPassword = finalPassword.concat(special);
  }
  return finalPassword;

};

function randomChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function writePassword() {
      var length = parseInt(prompt("Please, type in the lenght of your password (a number 8-128)","0"), 10);
      if (length > 128 ){
        alert("This isn`t a valid number! Please, input a number 8 - 126");
      }
      if (length < 8 ){
        alert("This isn`t a valid number! Please, input a number 8 - 126");
      }
      else {
        newPassword.length == length;
        generatePassword();
      }
      };

function generatePassword() {
      var lowercase = confirm("Would you like to include lowercase characters? ");
      var uppercase = confirm("Would you like to include uppercase characters? ");
      var numeric = confirm("Would you like to include numeric characters? ");
      var special = confirm("Would you like to include srecial symbols? ");

    if (lowercase === false && uppercase === false && numeric === false && special === false ) {
      alert("At least one option has to be selected!");
    }
    
    arrayPassword();
    for (i = 0; i <= length; i++) {
      finalPassword = finalPassword.concat(randomChar(finalPassword));
    }
    
    return finalPassword;
};
      
    

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
