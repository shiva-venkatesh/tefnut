// var fetchWeather = require('fetchWeather')
// var express = require('express')
import express from 'express'
var app = express()
var path = require('path')
app.use(express.static('views'))

import { fetchForecast } from fetchWeather;

app.listen(8000, function () {
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/views/index.html'));
      // res.render('index', { title: 'Hey', message: 'Hello there!' })
    })
    app.get('/forecasts', function(req, res) {
      fetchWeather.fetchForecast()
      res.json(JSON.stringify(app.locals.val))
    })
})
