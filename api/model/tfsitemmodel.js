'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TFSItemSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the item'
  },
  addedDate: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    required: 'Kindly enter the type of the item'
  },
  vote: {
    type: Number

  },
  addedBy: {
    type: Number

  }
});

module.exports = mongoose.model('Items', TFSItemSchema);