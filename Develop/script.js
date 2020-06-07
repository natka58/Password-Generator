

document.querySelector("#generate").addEventListener("click", passwordExecute);


// var characterType
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var punctuation = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

//Length of use password
var userLength;

// User choice creteria 
var userLowerCase;
var userUpperCase;
var userNumbers;
var userPunctuation;

//User choice selection 
var characterType = [];

// Password length 8 to 128 characters
function passwordOutput() {
//Ask how long password to be
  userLength = (prompt("How many characters would you like your password to have? Select between 8-128!"));
  
  //Loop password length
  if (userLength < 8 || userLength > 128) {
    return passwordOutput ();
    //alert("Password must be between 8-128 characters")
    //userLength = (prompt("How many characters would you like your password to have?"));
  }
  alert(`Your password will have ${userLength} characters`);
  console.log(userLength);

  //Character selection
  //Must have at least one character 
  alert("Select at least 1 special character for your password");
  userLowerCase = confirm("Do you want lower case letters?");
  userUpperCase = confirm("Do you want UPPER case letters?");
  userNumbers = confirm("Do you want numbers 123?");
  userPunctuation = confirm("Do you want special characters !@#$?");
  // When not met one character
 if  (userLowerCase === false && userUpperCase === false && userNumbers === false && userPunctuation === false) {
    alert("At least 1 special character must be selected");
    userLowerCase = confirm("Do you want lower case letters?");
    userUpperCase = confirm("Do you want UPPER case letters?");
    userNumbers = confirm("Do you want numbers 123?");
    userPunctuation = confirm("Do you want special characters !@#$?");
  }
  //If characters selected
  if (userLowerCase) {
    characterType = characterType.concat(lowerCase);
  }
  if (userUpperCase) {
    characterType = characterType.concat(upperCase);
  }

  if (userNumbers) {
    characterType = characterType.concat(numbers);
  }

  if (userPunctuation) {
    characterType = characterType.concat(punctuation);
  }
  console.log(characterType);

  // Loop random character array
  var randomString = ""
  for (let i = 0; i < userLength; i++) {
    randomString = randomString + characterType[Math.floor(Math.random() * characterType.length)];
    console.log(randomString);
  } 
    return randomString;
}
function passwordExecute() {
  var password = passwordOutput();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
