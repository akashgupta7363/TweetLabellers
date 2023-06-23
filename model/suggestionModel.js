const mongoose = require('mongoose');

const suggestedModel = mongoose.Schema({
  suggestedLabel: String,
  approval: {
    type: String,
    default: 'pending',
  },
  username: String,
  content: String,
});

const Suggestion = mongoose.model('Suggestion', suggestedModel);
module.exports = Suggestion;
