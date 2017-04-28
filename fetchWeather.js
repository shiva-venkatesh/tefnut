var express = require('express')
var app = express()

var rp = require('request-promise');

var baseURL = 'http://dataservice.accuweather.com'
var location_code = 204108

exports.fetchForecast = function fetchForecast() {

  var store
  var url = baseURL + '/forecasts/v1/hourly/1hour/' + location_code
  var config_properties = { apikey: 'DcLAlS5lGA5mYPJvn4hoGZQN3aGS7DdE',
                            language: 'en-us',
                            details: true, 
                            metric: true }
  // request(url, qs:config_properties)
  //   .then(function(response) {
  //     app.get('/forecasts', function(req, res) {
  //       res.json(response)
  //     })
  //  var a = app.get('/forecasts', function(req, res) {
  //       res.json(response)
  //     })
  //   })
    //
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
}


