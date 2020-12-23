'use strict'

let apiUrl
const apiUrls = {
  development: 'https://warm-scrubland-47244.herokuapp.com',
  production: 'https://warm-scrubland-47244.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
