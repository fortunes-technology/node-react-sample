'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {type: String},
  slug: {type: String},
  tweet: {type: String, optional: true},
  color: {type: String},
  snapchat: {type: String,optional: true}
});

module.exports = mongoose.model('categorys', CategorySchema);
