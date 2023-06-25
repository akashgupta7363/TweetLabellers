const nodeCron = require('node-cron');
const Content = require('../model/ContentModel');
const Suggestion = require('../model/suggestionModel');
const labels = require('../data/labels');
const Label = require('../model/labelModel');

// two times a day
const cronJob = nodeCron.schedule('0 0,12 * * *', async () => {
  try {
    const suggestions = await Suggestion.find({
      markedByAdmin: true,
    });
    if (suggestions === []) return;
    suggestions.map((sug) => {
      if (sug.approval === true) {
        approvedUpdate(sug);
      } else if (sug.approval === false);
      declinedUpdate(sug);
    });
  } catch (error) {
    console.log(error);
  }
});

async function approvedUpdate(sug) {
  try {
    await Content.updateById(sug.tweetId, { label: sug.suggestedLabel });
    const newLabel = {
      label: sug.suggestedLabel,
      importance: true,
      tweetsId: [sug.tweetId],
    };
    await Label.create(newLabel);
    await Suggestion.findByIdAndDelete(sug._id);
  } catch (error) {
    console.log(error);
  }
}
async function declinedUpdate(sug) {
  await Content.findByIdAndDelete(sug.tweetId);
  const newLabel = {
    label: sug.suggestedLabel,
    importance: false,
  };
  await Label.create(newLabel);

  await Suggestion.findByIdAndDelete(sug._id);
}

module.exports = cronJob;
