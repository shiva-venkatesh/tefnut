var fetchWeather = require('fetchWeather')
var express = require('express')
var app = express()
var path = require('path');
// app.set('view engine', 'pug')

app.listen(8000, function () {
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/views/index.html'));
      // res.render('index', { title: 'Hey', message: 'Hello there!' })
    })
    app.get('/forecasts', function(req, res) {
      res.json(fetchWeather.fetchForecast())
    })
})