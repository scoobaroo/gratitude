//Lets load the mongoose module in our program
var mongoose = require('mongoose');
var express = require('express');
var app = express();
// SERVER-SIDE JAVASCRIPT

var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/vendor', express.static(__dirname + '/bower_components'));
//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost/gratitude');
var db = require('./models');
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

//Lets create a new user
var user1 = new User({username: 'admin',first_name:"eric", last_name:"han", age: 42});

//Some modifications in user object
user1.username = user1.username.toUpperCase();

//Lets try to print and see it. You will see _id is assigned.
console.log(user1);

//Lets save it
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
