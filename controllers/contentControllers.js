const Content = require('../model/ContentModel');
const tweetList = require('../data/tweetList');
const dotenv = require('dotenv');
const Suggestion = require('../model/suggestionModel');
const labels = require('../data/labels.js');
dotenv.config();

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const storeTweets = async (req, res) => {
  try {
    const data = await Content.create(tweetList);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
};

const labellingTweet = async (req, res) => {
  try {
    // const tweets = await Content.find({ label: 'new' });
    // tweets.map(async (tweet) => {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: getPrompt(tweetList[9].body),
        },
      ],
      temperature: 0.7,
      max_tokens: 5,
    });
    const tag = response.data.choices[0].message.content;

    //   assigningLabel(tweet, tag);
    // });
    res.status(200).json({
      message:
        'Tweets stored with the labels and some tweets label was sent back for Admin approval which will get stored if the admin approves',
      tag: tag,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

async function assigningLabel(tweet, tag) {
  try {
    if (labels.includes(tag)) {
      const data = await Content.findByIdAndUpdate(tweet._id, { label: tag });
    } else {
      const suggestedLabelledTweet = {
        tweetId: tweet._id,
        suggestedLabel: tag,
      };
      const data = await Suggestion.create({ suggestedLabelledTweet });
    }
  } catch (error) {
    console.log(error);
  }
}

function getPrompt(body) {
  const prompt = `Here is a tweet: 
  "${body}"
  these are labels:
  ${labels}.
  Analyze the tweet on the context of AI.
Can this tweet can be categorizes with the given label, if not then suggest an new label for the tweet.
Give a reply only with the label`;
  return prompt;
}
module.exports = { storeTweets, labellingTweet };
