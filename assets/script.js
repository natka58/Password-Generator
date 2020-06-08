document.querySelector("#generate").addEventListener("click", passwordGenerate);


//Test merge branches s

// var characterType
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];
var punctuation = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "?"
];

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
  userLength = prompt(
    'How many characters would you like your password to have? Select between 8-128!'
  );

  //Password length parameters
  if (userLength < 8 || userLength > 128) {
    alert('Password must be between 8-128 characters');
    return passwordOutput();
  }

  //Character selection
  //Must have at least one character
  alert('Select at least 1 special character for your password');
  var userLowerCase = confirm(
    'Do you want lower case letters?');
  var userUpperCase = confirm(
    'Do you want UPPER case letters?');
  var userNumbers = confirm(
    'Do you want numbers 123?');
  var userPunctuation = confirm(
    'Do you want special characters !@#$?');
  //Character selection criteria
  if (
    userLowerCase === false &&
    userUpperCase === false &&
    userNumbers === false &&
    userPunctuation === false
  ) 
  {
  //Prompt when character not chosen
  alert('At least 1 special character must be selected');

  var userLowerCase = confirm(
    'Do you want lower case letters?');
  var userUpperCase = confirm(
    'Do you want UPPER case letters?');
  var userNumbers = confirm(
    'Do you want numbers 123?');
  var userPunctuation = confirm(
    'Do you want special characters !@#$?');
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
  var randomString = "";
  for (let i = 0; i < userLength; i++) {
    randomString =
    randomString +
    characterType[Math.floor(Math.random() * 
    characterType.length)];
    console.log(randomString);
  }
  return randomString;
}
function passwordGenerate() {
  var password = passwordOutput();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
