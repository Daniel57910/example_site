var express = require('express');
var app = express()
const port = process.env.PORT || 8080;
var path = require("path");

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(port, () => {
  console.log('Express server listening on port', port)
});