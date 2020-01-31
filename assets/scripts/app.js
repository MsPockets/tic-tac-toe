'use strict'

const authEvents = require('./events')

$(() => {
  $('#sign-out-form')
  $('#change-password-form')
  $('#sign-up').on('click', authEvents.onSignUp)
  $('#sign-in').on('click', authEvents.onSignIn)
  $('#change-password').on('click', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut) 
  $('#game-board')
  })
