var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id     : Number,
  username    : String,
  first_name : String,
  last_name : String,
  age     : Number,
  lists : [{ type: Schema.Types.ObjectId, ref: 'List' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
