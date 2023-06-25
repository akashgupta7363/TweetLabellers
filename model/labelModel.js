const mongoose = require('mongoose');

const labelModel = mongoose.Schema({
  label: String,
  importance: Boolean,
  tweetsId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
    },
  ],
});

const Label = mongoose.model('Label', labelModel);
module.exports = Label;
