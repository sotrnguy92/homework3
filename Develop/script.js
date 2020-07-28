// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerString = "abcdefghijklmnopqrstuvwxyz";
let upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialString = "!@#$%^&*";
let numString = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passwordLength = 0;
  let lowerCase;
  let upperCase;
  let numCase;
  let specialCase;
  let showPassword = "";

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "How long would you like your password to be? Please choose between 8 and 128."
    );
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a length between 8 and 128");
    }
  }

  lowerCase = confirm(
    "Would you like your password to include lower case letters?"
  );

  upperCase = confirm(
    "Would you like your password to include Uppercase letters?"
  );

  numCase = confirm("Would you like to include a number in your password?");

  specialCase = confirm("Would you like to include a special character?");

  while (showPassword.length < Number(passwordLength)) {
    if (lowerCase === true) {
      showPassword = showPassword.concat(lowerString[Math.floor(Math.random() * 26)])
    }
  }


  return showPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

