// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("How long would you like your password to be?");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a length between 8 and 128");
    }
  }
  
  lowerCase = confirm("Would you like your password to include lower case letters?");

  upperCase = confirm("Would you like your password to include Uppercase letters?")
  
  numCase = confirm("Would you like to include a number in your password?")

  specialCase = confirm("Would you like to include a special character?")


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
