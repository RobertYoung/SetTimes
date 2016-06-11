const express = require('express');
const async = require('async');
const request = require('request');
const cors = require('cors');
const app = express();
const jwt = require('express-jwt');
const dotenv = require('dotenv');
const https = require('https');
const spotifyAPI = require('./api/spotify.api');

// spotifyAPI.test();

loadEnvironmentVariables();
addMiddleware()

// Add authorization to the endpoints
var jwtCheck = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID
});

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

    res.send({
      spotify: response[0].artists,
      soundcloud: response[1].map((soundcloud) => {
        if (soundcloud.avatar_url) {
          soundcloud.avatar_url = soundcloud.avatar_url.replace("large", "t300x300");
        }
        return soundcloud;
      })
    });
  });
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

////////////
// SERVER //
////////////
function startServer() {
  app.listen(3000, function () {
    console.log('Set Times API listening on port 3000');
  });
}

function loadEnvironmentVariables() {
  dotenv.load();
}

function addMiddleware() {
  app.use(cors());
  // app.use('/', jwtCheck);
}

startServer();

module.exports = app;
