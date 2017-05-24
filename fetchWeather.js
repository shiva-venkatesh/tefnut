
module.exports = function() {

  var express = require('express')
  var geolocation = require('geolocation')
  
  var app = express()
  var rp = require('request-promise');

  this.fetchForecast = function () {    
    var baseURL = 'https://api.darksky.net/forecast/'
    var key = '38b1c9c7dab90d1df7493e9d0415aca8'
    var store
    var url = baseURL + key + location_code
    var config_properties = {
      apikey: 'DcLAlS5lGA5mYPJvn4hoGZQN3aGS7DdE',
      language: 'en-us',
      details: true,
      metric: true
    }
    var options = {
      uri: url,
      qs: config_properties,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };

    rp(options)
    .then(function(){app.locals.val = response})
    .catch(function (err) {
      // API call failed...
      console.log(err + ' API call failed')
      })
    return app.locals.val
  }
}
