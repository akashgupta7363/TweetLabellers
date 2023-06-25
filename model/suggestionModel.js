const mongoose = require('mongoose');

const suggestedModel = mongoose.Schema({
  suggestedLabel: String,
  approval: Boolean,
  markedByAdmin: {
    type: Boolean,
    default: false,
  },
  tweetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content',
  },
});

const Suggestion = mongoose.model('Suggestion', suggestedModel);
module.exports = Suggestion;
