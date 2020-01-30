'use strict'

const authEvents = require('./auth/events')

$(() => {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword) 
  $('#sign-out').on('submit', authEvents.onSignOut) 
  })
