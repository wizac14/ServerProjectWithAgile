const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
  + (currentdate.getMonth() + 1) + "/"
  + currentdate.getFullYear() + " @ "
  + currentdate.getHours() + ":"
  + currentdate.getMinutes() + ":"
  + currentdate.getSeconds();

const transactionSchema = new Schema({
  id: { type: ObjectId },
  name:{type:ObjectId},
  money:{type:Number},
  note:{type:String},
  image:{type:String},
  category:{ref:'category'},
  createAt: { type: Date, default: Date.now },
  updateAt:{ type: Date, default: Date.now },


  
});

module.exports = mongoose.models.transaction || mongoose.model('User', transactionSchema);
