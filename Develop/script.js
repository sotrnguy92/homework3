// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  passwordLength = 0
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("How long would you like your password to be?");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a length between 8 and 128");
    }
  return("hello");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
