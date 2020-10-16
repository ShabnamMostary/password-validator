function validatePass(password) {
  var l = password.length
  var spChars = '~`!#$%^&*+=-[]\\\';,/{}|":<>?'
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
  }


  for (let i = 0; i < l; i++) {
    if (spChars.indexOf(password[i]) >= 0) {
      specialCharCheck = true
    }
  }



  return (lengthCheck && numberCheck && upperCaseCheck && lowerCaseCheck && specialCharCheck)
}

module.exports = validatePass
