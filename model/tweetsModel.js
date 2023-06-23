const mongoose = require('mongoose');

const tweetModel = mongoose.Schema({
  username: { type: String, require: true },
  content: String,
  label: {
    type: String,
  },
});

const Tweet = mongoose.model('Tweet', tweetModel);
module.exports = Tweet;
