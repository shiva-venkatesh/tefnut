var express = require('express')
var app = express()
var path = require('path');
// app.set('view engine', 'pug')

app.listen(8000, function () {
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/views/index.html'));
      // res.render('index', { title: 'Hey', message: 'Hello there!' })
    })
})