var mongoose = require("mongoose");
var Schema = mongoose.Schema;


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

var List = mongoose.model('List', listSchema);

module.exports = List;
