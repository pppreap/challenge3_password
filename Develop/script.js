// Assignment code here

function generatePassword() { 

//use prompt for  password criteria determination
var inputLength; //character length specified
var inputLength = Number(prompt("What is the desired password length?", "Enter a number between 8 and 128."));

// if acceptable input, prompt next criteria of character types
 if (inputLength >8 && inputLength <128) {
  prompt("Please confirm character types you would like included in the generated password. Options: lowercase, uppercase, numeric and special character type selection.");
// if not acceptable input value, alert to generate password button again to start over
} else {
  alert("Password input length must be between 8-128 characters. Generate password button to start again!!");
}
//declare confirmed variable options for password character types
var confirmLowercase = confirm(" Lowercase is selected");
var confirmUpperCase = confirm(" Uppercase is selected");
var confirmNum = confirm("Numeric is selected");
var confirmSpecial= confirm( "Special Character is selected");


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
