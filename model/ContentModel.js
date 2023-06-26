const mongoose = require('mongoose');

const tweetModel = mongoose.Schema({
  username: { type: String, require: true },
  body: { type: String, require: true },
  label: {
    type: String,
    default: 'new',
  },
});

const Content = mongoose.model('Content', tweetModel);
module.exports = Content;
