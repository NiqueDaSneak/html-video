'use strict'

var express = require('express')
var app = express()

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index')
})

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Server running on port ' + port);
});
app.on('error', function() {
    console.log(error);
});
module.exports = app;
