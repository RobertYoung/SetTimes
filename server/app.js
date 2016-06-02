var express = require('express');
var proxy = require('express-http-proxy');
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('aS8JNASnKL5-B2o8OLvy6jZlV3Un2mm_es3WQQ1QEkAe_Zdvl1EjiG6SDx6cQKpg', 'base64'),
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
