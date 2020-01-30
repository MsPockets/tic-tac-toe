'use strict'

const authEvents = require('./events')

$(() => {
  $('#sign-out-form')
  $('#change-password-form')
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('click', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut) 
  $('#game-board')
  })
