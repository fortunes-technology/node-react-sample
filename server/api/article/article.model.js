'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users'},
  title: {type: String},
  shortDescription: {type: String}, // This is what should be showing on the card
  slug: {type: String},
  category: { type: String}, // This is the slug of the category
  date: {type: Date, default: Date.now},
  author: {type: String},
  photographBy: {type: String},
  content: {type: String},
  type: {type: String},
  thumbnail: {type: String},
  photo: {type: String, optional: true},
  video: {type: String, optional: true},
});

module.exports = mongoose.model('articles', ArticleSchema);
