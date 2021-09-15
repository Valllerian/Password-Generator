
var generateBtn = document.querySelector("#generate");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialSymbols = ["!", "*", "}", "{", "[", "]", "/", "#", "%", "@", "(", ")", "_", ";", ":", "<", ">", "&", "?", "+", "`", "|", "-", "="];

var finalPassword = "";
var lowercaseConfirmed = "";
var uppercaseConfirmed = "";
var numericConfirmed = "";
var specialConfirmed = "";
var passwordArray = [];

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

function randomChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function generatePassword() {
      var length = prompt("Please, type in the lenght of your password (a number from 8 to 128)");
      if (length > 128 ){
        alert("This isn`t a valid number! Please, input a number 8 - 126");
        return;
      }
      if (length < 8 ){
        alert("This isn`t a valid number! Please, input a number 8 - 126");
        return;
      }
      lowercaseConfirmed = confirm("Would you like to include lowercase characters? ");
      uppercaseConfirmed = confirm("Would you like to include uppercase characters? ");
      numericConfirmed = confirm("Would you like to include numeric characters? ");
      specialConfirmed = confirm("Would you like to include srecial symbols? ");
    if (lowercaseConfirmed === false && uppercaseConfirmed === false && numericConfirmed === false && specialConfirmed === false ) {
      alert("At least one option has to be selected!");
      return;
    }
    arrayPassword();
    for (i = 0; i <= length; i++) {
      finalPassword = finalPassword.concat(randomChar(passwordArray));
    }
    
    return finalPassword;
};
      

function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
  
}
    

  // 
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
