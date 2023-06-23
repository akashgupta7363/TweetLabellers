const nodeCron = require('node-cron');
const Content = require('../model/ContentModel');
const Suggestion = require('../model/suggestionModel');
const labels = require('../data/labels');

// two times a day
const cronJob = nodeCron.schedule('0 0,12 * * *', async () => {
  try {
    const suggestion = await Suggestion.find({
      'approval': { $ne: 'pending' },
    });
    if (suggestion === []) return;
    suggestion.map((sug) => {
      if (sug.suggestedLabel === 'approved') {
        approvedUpdate(sug);
      }
    });
  } catch (error) {}
});

async function approvedUpdate(sug) {
  try {
    await Content.updateById(sug.tweetId, { label: suggestedLabel });
    labels.push(sug.suggestedLabel);
    await Suggestion.findByIdAndDelete(sug._id);
  } catch (error) {
    console.log(error);
  }
}

module.exports = cronJob;
