// Assignment code here

function generatePassword() { 

//use prompt for  password criteria determination
var inputLength; //character length specified
var inputLength = Number(prompt("What is the desired password length?", "Enter a number between 8 and 128."));

//store input password length to a variable to use for random password generation
var confirmLength = inputLength;
alert(confirmLength);

// if acceptable input, prompt next criteria of character types
 if (inputLength >8 && inputLength <128) {
  alert("Please confirm character types you would like included in the generated password. Options: lowercase, uppercase, numeric and special character type selection.");
 
// if not acceptable input value, alert to generate password button again to start over
} 
  else {
  alert("Password input length must be between 8-128 characters. Press Generate Password button to start again!!");
}

//declare confirmed variable options for password character types
var confirmLowerCase = confirm(" Lowercase is selected");
var confirmUpperCase = confirm(" Uppercase is selected");
var confirmNum = confirm("Numeric is selected");
var confirmSpecial = confirm("Special Character is selected");

//if not at least one character type is selected, alert one must be selected 
if (confirmLowerCase === false && confirmUpperCase === false && confirmNum === false &&  confirmSpecial === false) {
  alert("At least one character type must be selected");
  confirm(" Lowercase is selected");
  confirm(" Uppercase is selected");
  confirm("Numeric is selected");
  confirm("Special Character is selected");



//declare values of each element in array values of each character types
var confirmLowerCase =["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var confirmUpperCase=["A", "B", "C","D","E","F","G", "H","I","J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var confirmNum=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var confirmSpecial=["~", "!", "@", "#","$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "<", ">", ",", "?", "-", "=", "[", "]", ".", ";", "'", ".", "/"];
}
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
