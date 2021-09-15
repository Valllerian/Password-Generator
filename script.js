// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = "";
var letters = "abcdefghijklmnopqrstuvwxyz";
var bigLetters = "abcdefghijklmnopqrstuvwxyz";;
var numbers = "0123456789";
var specialSymbols = "!*}{[]/@#()_:;?><,+~`|$%^&-=";

// Write password to the #password input
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
      }

function generatePassword() {
      var lowercase = confirm("Would you like to include lowercase characters? ");
      var uppercase = confirm("Would you like to include uppercase characters? ");
      var numeric = confirm("Would you like to include numeric characters? ");
      var special = confirm("Would you like to include srecial symbols? ");

    if ( lowercase === true) {
    }
    if ( uppercase === true) {
    }
    if ( numeric === true) {
    }
    if ( special === true) {

    }
    

}
      
    

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
