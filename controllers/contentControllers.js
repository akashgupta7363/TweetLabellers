const Content = require('../model/ContentModel');
const tweetList = require('../data/tweetList');
const dotenv = require('dotenv');
const Suggestion = require('../model/suggestionModel');
const Label = require('../model/labelModel');
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
    const tweets = await Content.find({ label: 'new' });

    const labels = await Label.find();
    tweets.map(async (tweet, i) => {
      setTimeout(async () => {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: getPrompt(tweet.body, labels),
            },
          ],
          temperature: 0.7,
          max_tokens: 5,
        });
        const tag = response.data.choices[0].message.content;
        tweet.label = tag;
      }, i * 25000);
    });
    setTimeout(() => {
      assigningLabel(tweets, labels);
      res.status(200).json({
        status: 'Tweets categorized successfully',
        message: 'Some tweets labelling waiting for admin approval.',
      });
    }, tweets.length * 25000);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

function assigningLabel(tweets, labels) {
  try {
    const impLabels = labels.filter((la) => la.importance);
    const nonImpLabels = labels.filter((la) => !la.importance);
    tweets.map(async (tweet) => {
      if (nonImpLabels.includes(tweet.label)) {
        await Content.findByIdAndDelete(tweet._id);
        return;
      } else if (impLabels.includes(tweet.label)) {
        await Content.findByIdAndUpdate(tweet._id, { label: tweet.label });
        await Label.updateOne(
          { label: tweet.label },
          {
            $push: {
              tweetsId: tweet._id,
            },
          }
        );
      } else {
        const suggestedLabelledTweet = {
          tweetId: tweet._id,
          suggestedLabel: tweet.label,
        };
        const data = await Suggestion.create(suggestedLabelledTweet);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function getPrompt(body, labels) {
  const labelsPrompt = labels
    .filter((label) => label.importance)
    .map((lab) => lab.label);
  const prompt = `Here is a tweet: 
  "${body}"
  these are labels:
  ${labelsPrompt}.
Analyze the tweet on the context of AI.
Can this tweet can be categorizes with the given label, if not then suggest an new label for the tweet.
Give a reply only with the label`;
  return prompt;
}
module.exports = { storeTweets, labellingTweet };
