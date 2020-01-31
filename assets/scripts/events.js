// //sign up
// $().on('click', )
// //sign in
// $().on('click', )
// //change password
// $().on('click', )
// //sign out
// $().on('click', )
// //start game
// $().on('click', function () {})


// //reset
// $().on('click', function (){})
// //place marker
// $().on('click', )
// //check for wins
// if (/* if win condition is met*/h) {}
// else{}
// //change player
// let player1 = true
// const changePlayer = () => player1 = !player1
// //tally win
// $().on('win', winCounter += 1)
// //tally loss
// $().on('win', lossCounter += 1)
// //win ratio
// let winRatio = Math.floor(winRatio/loseRatio)*100 + '%'



const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')


const onSignUp = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
    api.signUp(data)
      .then(ui.onSignUpSuccess)
      .catch(ui.onSignUpFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
    api.signIn(data)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
}

const onChangePassword  = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
    api.changePassword(data)
      .then(ui.onChangePasswordSuccess)
      .catch(ui.onChangePasswordFailure)
}

const onSignOut  = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.signOut()
      .then(ui.onSignOutSuccess)
      .catch(ui.onSignOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
