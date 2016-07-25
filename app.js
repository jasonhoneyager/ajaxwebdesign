'use strict'

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/images'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about-michelle.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/about-michelle.html'));
});

app.get('/writing-services.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/writing-services.html'));
});

app.get('/editing-services.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/editing-services.html'));
});

app.get('/published-works.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/published-works.html'));
});


app.listen(3000, function () {
  console.log('Listening on port 3000!');
});