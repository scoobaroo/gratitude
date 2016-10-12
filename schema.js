var mongoose = require('mongoose'), Schema = mongoose.Schema;

var userSchema = new Schema({
  _id     : Number,
  username    : String,
  first_name : String,
  last_name : String,
  age     : Number,
  lists : [{ type: Schema.Types.ObjectId, ref: 'List' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var listSchema = new Schema({
  _creator : { type: Number, ref: 'User' },
  comments : [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
  title    : String,
  item1 : String,
  item2 : String,
  item3 : String,
  item4 : String,
  item5 : String,
  item6 : String,
  item7 : String,
  item8 : String,
  item9 : String,
  item10 : String,
},{
    timestamps: true
});

var commentSchema = new Schema({
  list : [{ type: Schema.Types.ObjectId, ref: 'List' }],
  _creator : { type: Number, ref: 'User' },
  body : String
},{
    timestamps: true
});

var Comment = mongoose.model('Comment', commentSchema);
var List  = mongoose.model('List', listSchema);
var User = mongoose.model('User', userSchema);
