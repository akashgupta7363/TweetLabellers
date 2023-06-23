const Tweet = require('../model/tweetsModel');
const tweetList = require('../data/tweetList');
const Suggestion = require('../model/suggestionModel');
const labels = require('../data/labels.js');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const labellingTweet = async (req, res) => {
  const labeledTweet = [];
  try {
    tweetList.map(async (tweet) => {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: getPrompt(tweet.body) }],
      });
      const tag = response.data.choices[0].message.content;

      assigningLabel(tweet, tag);
    });
    res.status(200).json({
      message:
        'Tweets stored with the labels and some tweets went for Admin approval which will get stored if the admin approves',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

async function assigningLabel(tweet, tag) {
  try {
    if (labels.includes(tag)) {
      const LabelledTweet = { ...tweet, label: tag };
      const data = await Tweet.create(LabelledTweet);
    } else {
      const suggestedLabelledTweet = { ...tweet, suggestedLabel: tag };
      const data = await Suggestion.create({ suggestedLabelledTweet });
    }
  } catch (error) {
    console.log(error);
  }
}

function getPrompt(body) {
  const prompt = `You are a person who is given a tweet and some tags. Analyze the tweet. if any tag from the provided tags doesn't fit with the tweet, then Suugest a tag where it will fit the most in the context of AI . Give the answer only with tag
  these are tags:
 ${labels}.
Here is the tweet: 
"${body}".`;
}
module.exports = labellingTweet;
