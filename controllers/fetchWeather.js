var Promise = require('bluebird')
var app = express()

var request = Promise.promisify(require("request"));

let baseURL = 'http://dataservice.accuweather.com'
let location_code = 204108

function fetchForecast() {
  let url = baseURL + '/forecasts/v1/hourly/1hour/' + location_code
  let config_properties = { apikey: 'DcLAlS5lGA5mYPJvn4hoGZQN3aGS7DdE',
                            language: 'en-us',
                            details: true, 
                            metric: true }
  request(baseURL, qs:config_properties)
    .then(function(response) {
      app.get('/forecasts', function(req, res) {
        res.json(response)
      })
    })
}

