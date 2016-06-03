var express = require('express');
var proxy = require('express-http-proxy');
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET,, 'base64'),
  audience: '4zTcIczty7HnK4cbkVM2tSlzYHL9idxZ'
});

app.use('/', jwtCheck);

app.use('/proxy', proxy('www.google.com', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
