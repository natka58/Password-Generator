
document.getElementById('generate').onclick = function() {writePassword()};

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


// Prompt for user
function writePassword () {
  var userLength = (prompt ("How many characters do you want your password to be? Must be 8-128"));
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password length 8 to 128 characters


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Set length of the password

// Set to include character in password

// Set to include lowercase, uppaercase. numeric, characters in password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


