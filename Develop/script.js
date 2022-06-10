// Assignment code here

//need to define function of generatePassword in the function writePassword
function generatePassword() {
//use prompt for  password criteria determination
var inputLength = parseInt(prompt("What is the desired password length? Enter a number between 8 and 128."));
//set condition needed if else statements and validate input by confirm, loop answer out of parameters
if (inputLength <= 8 && inputLength >= 128) {
  alert ("Password length must be at least 8 -128 characters!!");

}
// if acceptable parameters, prompt next criteria
 else if (inputLength >= 8  &&  inputLength <= 128) {
 prompt ("Which character types to include in password? Options: lowercase, uppercase, numeric, or special characters.");
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
