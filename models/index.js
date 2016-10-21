var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI ||
                  'mongodb://localhost/gratitude' );

var List = require('./list');

module.exports.Lestaurant = List;
module.exports.Comment = require('./comment');
module.exports.User = require('./user');
