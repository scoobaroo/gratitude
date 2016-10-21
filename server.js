//Lets load the mongoose module in our program
var mongoose = require('mongoose');
var express = require('express');
var app = express();
// SERVER-SIDE JAVASCRIPT
var db = require('./models');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/vendor', express.static(__dirname + '/bower_components'));
//Lets connect to our database using the DB server URL.
db = mongoose.createConnection('mongodb://localhost/gratitude');

// prepare server
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap



/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
/**
 * Lets Use our Models
 * */


app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
