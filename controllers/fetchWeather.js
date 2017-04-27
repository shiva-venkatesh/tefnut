var Promise = require('bluebird')
var app = express()

var request = Promise.promisify(require("request"));
var rp = require('request-promise');

let baseURL = 'http://dataservice.accuweather.com'
let location_code = 204108

function fetchForecast() {
  let store
  let url = baseURL + '/forecasts/v1/hourly/1hour/' + location_code
  let config_properties = { apikey: 'DcLAlS5lGA5mYPJvn4hoGZQN3aGS7DdE',
                            language: 'en-us',
                            details: true, 
                            metric: true }
  // request(url, qs:config_properties)
  //   .then(function(response) {
  //     app.get('/forecasts', function(req, res) {
  //       res.json(response)
  //     })
  //  let a = app.get('/forecasts', function(req, res) {
  //       res.json(response)
  //     })
  //   })
    //
var options = {
    uri: url,
    qs: config_properties,
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(response, function (response) {
      return response
    })
    .catch(function (err) {
        // API call failed...
        console.log('API call failed')
    })
}


