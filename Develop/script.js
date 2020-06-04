
document.getElementById('generate').onclick = function() {generatePassword()};

// var characters 
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var punctuation = ["!@#$%^&*()_+~`|}{[]:;?><,./-="];

// user character
var characterTypes = [];
var userLength;
var userLowerCase;
var userUpperCase;
var userNumbers;
var userPunctuation;
var randomCharacter;
var randomArray;
var characterTypes = [];


// Password length 8 to 128 characters
function generatePassword() {
  userLength = (prompt("How many characters would you like your password to have? Select between 8-128!"));
 
  //passwordText.value = password;

  //Loop password length
  if (userLength < 8 || userLength > 128) {
    alert ("Password must be between 8-128 characters")
    userLength = (prompt("How many characters would you like your password to have?"));
    
    alert(`Your password will have ${userLength} characters`);
    }
      
      userLowerCase = confirm ("Do you want lower case letters?");
      userUpperCase = confirm ("Do you want UPPER case letters?");
      userNumbers = confirm ("Do you want numbers 123?");
      userPunctuation = confirm ("Do you want special characters !@#$?");

      //which characters to have in password

  


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");


// Set length of the password

// Set to include character in password

// Set to include lowercase, uppaercase. numeric, characters in password

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

function passwordOutput () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
}