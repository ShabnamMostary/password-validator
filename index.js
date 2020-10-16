function validatePass(password) {
  var l = password.length
  var lengthCheck = false
  var numberCheck = false


  if (l >= 8) {
    lengthCheck = true
  }
  for (var i = 0; i < l; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      numberCheck = true
    }
  }

  return (lengthCheck && numberCheck)
}

module.exports = validatePass
