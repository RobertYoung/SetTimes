var express = require('express');
var httpProxy = require('http-proxy');
var app = express();
var jwt = require('express-jwt');
var dotenv = require('dotenv');
var https = require('https');
var spotifyAPI = require('./api/spotify.api');

spotifyAPI.test();

// app.use('/', jwtCheck);

// app.use('/search/artist',)

// Load the .env variables
dotenv.load();

// Add authorization to the endpoints
var jwtCheck = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID
});

// Create a proxy server
var apiProxy = httpProxy.createProxyServer();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

// End points
app.get("/artist", function(req, res, next){
  var q = req.query.q;

  var request = https.get(`https://api.spotify.com/v1/search?q=${q}&type=artist`, function (response) {
    var body = "";

    response.on('data', function(data) {
      body += data;
    });

    response.on('end', function() {
      res.send(JSON.parse(body));
    });
  });

  request.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
  });

  request.end();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
