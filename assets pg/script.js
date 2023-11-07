var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChars = '0123456789';
var specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';


function getRandomCharacter(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}


function askForCharacterType(message) {
  var response = window.confirm(message);
  return response;
}


function generatePassword() {
  var password = '';
  var availableChars = '';

  if (askForCharacterType('Include lowercase characters?')) {
    availableChars += lowercaseChars;
    password += getRandomCharacter(lowercaseChars);
  }

  if (askForCharacterType('Include uppercase characters?')) {
    availableChars += uppercaseChars;
    password += getRandomCharacter(uppercaseChars);
  }

  if (askForCharacterType('Include numeric characters?')) {
    availableChars += numericChars;
    password += getRandomCharacter(numericChars);
  }

  if (askForCharacterType('Include special characters?')) {
    availableChars += specialChars;
    password += getRandomCharacter(specialChars);
  }

  if (availableChars === '') {
    alert('At least one character type should be selected.');
    return '';
  }

  var passwordLength = parseInt(prompt('Enter the password length (8-128 characters):'));
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert('Please enter a valid password length between 8 and 128 characters.');
  return '';
}

  for (var i = password.length; i < passwordLength; i++) {
    password += getRandomCharacter(availableChars);
  }

  return password;
}


var generateBtn = document.querySelector("#generate"); 


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = "Generated password failed. Please try again.";
  }
}


generateBtn.addEventListener("click", writePassword); {
    
}