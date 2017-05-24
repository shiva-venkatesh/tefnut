var express = require('express')
var app = express()
var path = require('path')
app.use(express.static('views'))

var fetchWeather = require('./fetchWeather.js')

app.listen(8000, function () {
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/views/index.html'));
      // res.render('index', { title: 'Hey', message: 'Hello there!' })
    })
    // app.get('/forecasts', function(req, res) {
    //   var fetchWeatherInstance = new fetchWeather()
    //   var value = fetchWeatherInstance.fetchForecast()
    //   res.json(JSON.stringify(value))
    // })
})
