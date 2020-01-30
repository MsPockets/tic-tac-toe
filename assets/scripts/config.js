'use strict'

let apiUrl
const apiUrls = {
  production: 'https://mspockets.github.io/tic-tac-toe',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
