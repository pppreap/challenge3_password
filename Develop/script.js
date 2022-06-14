// Assignment code here
//declare values of each element in array values of each character types
var lowercase =["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase=["A", "B", "C","D","E","F","G", "H","I","J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var special =["~", "!", "@", "#","$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "<", ">", ",", "?", "-", "=", "[", "]", ".", ";", "'", ".", "/"];

//confirmed character type choices put into options variable string
var options;
var inputLength; //character length specified

function generatePassword() { 

//use prompt for  password criteria determination

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

//if not at least one character type is selected, alert one character type  must be selected 
if (confirmLowerCase === false && confirmUpperCase === false && confirmNum === false &&  confirmSpecial === false) {
  alert("At least one character type must be selected");
  confirm(" Lowercase is selected");
  confirm(" Uppercase is selected");
  confirm("Numeric is selected");
  confirm("Special Character is selected");
}

//if all character types is selected how to joined the array values with concat
   if (confirmLowerCase === true && confirmUpperCase === true && confirmNum === true &&  confirmSpecial === true) {
   var options = lowercase.concat(num, uppercase, special);
   console.log(options);	
  }
  //all other types of options of character type selections with the joined arrays via concat
   if (confirmLowerCase === true && confirmUpperCase === true && confirmNum === true); {
   var options = lowercase.concat(num, uppercase);
   console.log(options);
   }
  if (confirmLowerCase === true && confirmUpperCase === true && confirmSpecial === true); {
  var options = lowercase.concat(uppercase, special);
  console.log(options);
  }
   if (confirmLowerCase === true && confirmNum === true && confirmSpecial === true); {
  var options = lowercase.concat(num, special);
  console.log(options);
  }
 if (confirmUpperCase === true && confirmNum === true && confirmSpecial === true); {
  var options = uppercase.concat(num, special);
  console.log(options); }

  if (confirmLowerCase === true && confirmNum===true); {
    var options = lowercase.concat(num);
    console.log(options);
  }
 if (confirmLowerCase === true && confirmUpperCase===true);{
    var options = lowercase.concat(uppercase);
    console.log(options);
  }
  if (confirmLowerCase === true && confirmSpecial===true);{
    var options = lowercase.concat(special);
    console.log(options);
  } 
  if (confirmUpperCase === true && confirmNum===true); {
  var options = uppercase.concat(num);
  console.log(options); 
 }
  if (confirmUpperCase === true && confirmSpecial===true);{
  var options = uppercase.concat(special);
  console.log(options); 
  }
 
 //if one selection does need to join the array with concat
 if (confirmLowerCase === true);{
  var options = lowercase;
  console.log(options);
  }
 if (confirmUpperCase === true); {
  var options = uppercase;
  console.log(options);
  }
 if (confirmNum === true); {
  var options = num;
  console.log(options);
  }
 if (confirmSpecial === true); {
  var options = special;
  console.log(options);
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
