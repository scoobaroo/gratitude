var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  list : [{ type: Schema.Types.ObjectId, ref: 'List' }],
  _creator : { type: Number, ref: 'User' },
  body : String
},{
    timestamps: true
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
