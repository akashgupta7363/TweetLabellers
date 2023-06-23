const Tweet = require('../model/tweetsModel');
const tweetList = require('../tweetList');

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const createTweet = async (req, res) => {
  const labeledTweet = [];
  try {
    tweetList.map(async (tweet) => {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: getPrompt(tweet.body) }],
      });
    });
  } catch (error) {}
};

function getPrompt(body) {
  const prompt = ``;
}
