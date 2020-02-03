const store = require('./store')
const api = require('./api')



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
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#instructions').show()
  $('#start-game').show()
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
  $('#sign-up').show()
  $('#sign-in').show()
}
const onSignOutFailure = function(response) {
  $('#message').text('Failed to sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onStartPlayingSuccess = function(response) {
  $('#game-board').show()
  $('#game-board').trigger('reset')
  $('#reset').show()
  $('#instructions').hide()
  $('#game-info').show()
  $('#message').text('Game board created')
  store.game = response.game
}

const onStartPlayingFailure = function () {
  $('#message').text('Failed to load game board')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onMakeMoveSuccess = function (event) {
  $('#message').text('Move Made')
  $(event.target).text(store.playerMarker)
  api.changePlayer()
  
}

const onMakeMoveFailure = function () {
  $('#message').text('Failed to make move')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onStartPlayingSuccess,
  onStartPlayingFailure,
  onMakeMoveSuccess,
  onMakeMoveFailure
}
