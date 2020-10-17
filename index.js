function validatePass(password) {
  var l = password.length
  var spChars = '~`!@#$%^&*+=-[]\\\';,/{}|":<>?'
  var lengthCheck = false
  var numberCheck = false
  var specialCharCheck = false
  var upperCaseCheck = false
  var lowerCaseCheck = false


  if (l >= 8) {
    lengthCheck = true
  }
  for (let i = 0; i < l; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      numberCheck = true
    }
    if (spChars.indexOf(password[i]) >= 0) {
      specialCharCheck = true
    }

    // determine if password[i] is a character 
    var isChar = password[i].toUpperCase() !== password[i].toLowerCase()

    if (password[i] === password[i].toUpperCase() && isChar) {
      upperCaseCheck = true
    }

    if (password[i] === password[i].toLowerCase() && isChar) {
      lowerCaseCheck = true
    }
  }

  return (lengthCheck && numberCheck && upperCaseCheck && lowerCaseCheck && specialCharCheck)
}

module.exports = validatePass
