
document.getElementById('generate').onclick = function () { generatePassword() };

// var characterTypes 
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
var randomlOutput = "";


// Password length 8 to 128 characters
function generatePassword() {
  userLength = (prompt("How many characters would you like your password to have? Select between 8-128!"));
  password = '';
  //passwordText.value = password;

  //Loop password length
  if (userLength < 8 || userLength > 128) {
    alert("Password must be between 8-128 characters")
    userLength = (prompt("How many characters would you like your password to have?"));
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
  if (userLowerCase === false && userUpperCase === false && userNumbers === false && userPunctuation === false) {
    alert("At least 1 special character must be selected");
    userLowerCase = confirm("Do you want lower case letters?");
    userUpperCase = confirm("Do you want UPPER case letters?");
    userNumbers = confirm("Do you want numbers 123?");
    userPunctuation = confirm("Do you want special characters !@#$?");
  }
  //If characters selected
  if (userLowerCase === true); {
    characterTypes.push(lowerCase);
  }

  if (userUpperCase == true); {
    characterTypes.push(upperCase);
  }

  if (userNumbers === true); {
    characterTypes.push(numbers);
  }

  if (userPunctuation === true); {
    characterTypes.push(punctuation);
  }




  //which characters to have in password


  console.log(characterTypes)
  // Get references to the #generate element
  //var generateBtn = document.querySelector("#generate");


  // Set length of the password

  // Set to include character in password

  // Set to include lowercase, uppaercase. numeric, characters in password

  // Add event listener to generate button
  //generateBtn.addEventListener("click", writePassword);

  function passwordOutput() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  }
}

