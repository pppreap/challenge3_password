

// Assignment code here



//declare values of each element in array values of each character types
var lowercase =["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase=["A", "B", "C","D","E","F","G", "H","I","J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var special =["~", "!", "@", "#","$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "<", ">", ",", "?", "-", "=", "[", "]", ".", ";", "'", ".", "/"];

//confirmed character type choices put into options variable string
var options=[];
var inputLength; //character length specified

function generatePassword() { 

//use prompt for  password criteria determination

var inputLength = Number(prompt("What is the desired password length?", "Enter a number between 8 and 128."));

// if acceptable input, prompt next criteria of character types
if (inputLength > 7 && inputLength < 129) {
  alert("Please confirm character types you would like included in the generated password. Options: lowercase, uppercase, numeric and special character type selection.");
 
// if not acceptable input value, alert to generate password button again to start over
} 
else if (!inputLength|| inputLength < 8 || inputLength > 129) {
  prompt("Please enter valid value", " Enter Number 8-128");
}
//need code block break?

//declare confirmed variable options for password character types
var confirmLowerCase = confirm(" Lowercase is selected");
var confirmUpperCase = confirm(" Uppercase is selected");
var confirmNum = confirm("Numeric is selected");
var confirmSpecial = confirm("Special Character is selected");

//if not at least one character type is selected, alert one character type  must be selected 
if (confirmLowerCase === false && confirmUpperCase === false && confirmNum === false &&  confirmSpecial === false) {
  alert("At least one character type must be selected");
  var confirmLowerCase = confirm(" Lowercase is selected");
  var confirmUpperCase = confirm(" Uppercase is selected");
  var confirmNum = confirm("Numeric is selected");
  var confirmSpecial = confirm("Special Character is selected");
}
 
  //all types of options of character type selections with the joined arrays values via concat
if (confirmLowerCase === true) {
  options = options.concat(lowercase);
}

if (confirmUpperCase === true ) {
  options = options.concat(uppercase);
}
 
if (confirmNum === true ) {
  options = options.concat(num);
}

if (confirmSpecial === true) {
  options = options.concat(special);
}

var userOptionsPw =[]; // password created will be a string
// how to get a randomize password based on options and inputlength using Loop, push  and Math.random method
for (var i= 0; i < inputLength; i++) {
 var optionsCombined = options[Math.floor(Math.random()* options.length)];
 userOptionsPw.push(optionsCombined);
}

return userOptionsPw.join("");
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
