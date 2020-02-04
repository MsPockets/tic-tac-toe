const store = require('./store')
const api = require('./api')

let turnCounter = 0
const changePlayer = () => {
  store.playerMarker === 'x' ? store.playerMarker = 'o' : store.playerMarker = 'x'
}

const checkForWin = function () {
  if ((store.game.cells[0] !== '') && (store.game.cells[0] === store.game.cells[1]) && (store.game.cells[0] === store.game.cells[2])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
  }
  else if ((store.game.cells[3] !== '') && (store.game.cells[3] === store.game.cells [4] && store.game.cells[3] === store.game.cells[5])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
  }
  else if ((store.game.cells[6] !== '') && (store.game.cells[6] === store.game.cells [7] && store.game.cells[6] === store.game.cells[8])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
  }
  else if ((store.game.cells[0] !== '') && (store.game.cells[0] === store.game.cells [3] && store.game.cells[0] === store.game.cells[6])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
  }
  else if ((store.game.cells[1] !== '') && (store.game.cells[1] === store.game.cells [4] && store.game.cells[1] === store.game.cells[7])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
  }
  else if ((store.game.cells[2] !== '') && (store.game.cells[2] === store.game.cells [5] && store.game.cells[2] === store.game.cells[8])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
  }
  else if ((store.game.cells[0] !== '') && (store.game.cells[0] === store.game.cells [4] && store.game.cells[0] === store.game.cells[8])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
  }
  else if ((store.game.cells[2] !== '') && (store.game.cells[2] === store.game.cells [4] && store.game.cells[2] === store.game.cells[6])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
  }
}

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
  $('#sign-up-form').show()
  $('#sign-in-form').show()
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
  $('#current-player').show()
  $('#current-player').text(`Current Player: ${store.playerMarker}`)
}

const onStartPlayingFailure = function () {
  $('#message').text('Failed to load game board')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onMakeMoveSuccess = function (event) {
  console.log(event.target)
  if ($(event.target).is(':empty')) {
    $('#current-player').text(`Current Player: ${store.playerMarker}`)
    $('#message').text('Move Made')
    $(event.target).text(store.playerMarker)
    turnCounter += 1
    store.game.cells[$(event.target).attr('id')] = store.playerMarker
    if (turnCounter >= 5) {
      checkForWin()
    }
    changePlayer()
    console.log(store.game.cells)
  }
    
  else {
    return $('#message').text("You can't place your token here!")
  }
}

const onMakeMoveFailure = function () {
  $('#message').text('Failed to make move')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onResetSuccess = function () {

}

const onResetFailure = function() {

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
  onMakeMoveFailure,
  checkForWin,
  onResetSuccess,
  onResetFailure
}
