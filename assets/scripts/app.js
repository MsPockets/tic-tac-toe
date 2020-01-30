'use strict'

const authEvents = require('./events')

$(() => {
  $('#sign-out-form').hide()
  $('#change-password-form').hide()
  $('#sign-up').on('click', authEvents.onSignUp)
  $('#sign-in').on('click', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#game-board').hide()
  })
