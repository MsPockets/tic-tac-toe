'use strict'

const authEvents = require('./events')

$(() => {
  $('#sign-out-form').show()
  $('#change-password-form').show()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut) 
  $('#game-board').show()
  })
