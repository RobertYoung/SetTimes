const express = require('express');
const httpProxy = require('http-proxy');
const async = require('async');
const request = require('request');
const app = express();
const jwt = require('express-jwt');
const dotenv = require('dotenv');
const https = require('https');
const spotifyAPI = require('./api/spotify.api');

spotifyAPI.test();

loadEnvironmentVariables();

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

///////////////
// ENDPOINTS //
///////////////
function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}

app.get("/artist", function(req, res, next){
  var q = req.query.q;
  var urls = [];
  urls.push(`https://api.spotify.com/v1/search?q=${q}&type=artist`);
  urls.push(`${process.env.SOUNDCLOUD_API_URL}/users?client_id=${process.env.SOUNDCLOUD_CLIENT_ID}&q=${q}`);

  async.map(urls, httpGet, function (err, response){
    if (err) return console.log(err);
    console.log(res);
    res.send(response);
  });
});

app.get('/test', () => {
  SC.get('/users?q=hannah', function(err, track) {
  if ( err ) {
    throw err;
  } else {
    console.log('track retrieved:', track);
  }
});
})

app.get('/', function (req, res) {
  res.send('Hello World!');
});

////////////
// SERVER //
////////////
function startServer() {
  app.use('/', jwtCheck);
  app.use(allowCrossDomain);
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
}

function loadEnvironmentVariables() {
  dotenv.load();
}

////////////////
// SOUNDCLOUD //
////////////////



startServer();

module.exports = app;
