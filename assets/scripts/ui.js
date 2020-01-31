const store = require('./store')

let playerToken

const onSignUpSuccess = function(response) {
  $('#message').text(response.user.email + ' signed up')
  $('#sign-up-form').trigger('reset')
  $('#message').addClass('success-message')
}
const onSignUpFailure = function(response) {
  $('#message').text('Failed to sign up')
  $('#message').addClass('failure')
}

const onSignInSuccess = function(response) {
  $('#message').text(response.user.email + ' signed in')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const onSignInFailure = function(response) {
  $('#message').text('Failed to sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePasswordSuccess = function(response) {
  $('#message').text('Password successfully changed')
  $('#change-password-form').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}
const onChangePasswordFailure = function(response) {
  $('#message').text('Failed to change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignOutSuccess = function(response) {
  $('#message').text('Signed Out')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}
const onSignOutFailure = function(response) {
  $('#message').text('Failed to sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const placeToken = function() {
  $("button.id").text(playerToken)
}


module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
