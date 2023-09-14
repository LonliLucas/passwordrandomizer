// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var special = `"!@#$%^&*()-_=+[]{}|;:/?.>'`

// Write password to the #password input
function generatePassword() {
  var passwordLength = prompt("Enter a length between 10 and 20")
  if(passwordLength < 10 || passwordLength > 20 || isNaN(passwordLength)) {
    alert("Please enter a valid password length")
    generatePassword()
    return
  }
  var includeUppercase = confirm("Include uppercase letters?")
  var includeLowercase = confirm("Include lower case letters?")
  var includeNumbers = confirm("Include numbers?")
  var includeSpecial = confirm("Include special characers such as $ and @?")
  
  var possibleCharacters = ""

  if(includeUppercase){
    possibleCharacters += uppercase
  }
  if(includeLowercase){
    possibleCharacters += lowercase
  }
  if(includeNumbers){
    possibleCharacters += numbers
  }
  if(includeSpecial){
    possibleCharacters += special
  }
  if(!includeUppercase && !includeLowercase && !includeSpecial && !includeLowercase){
    alert("You must pick at least one category of Characters.")
  }
  var password = ""
  for(var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random()*(possibleCharacters.length-1))
    password += possibleCharacters[randomIndex]
  }

  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
