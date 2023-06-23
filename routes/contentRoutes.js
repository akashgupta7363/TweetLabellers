const express = require('express');
const {
  storeTweets,
  labellingTweet,
} = require('../controllers/contentControllers');
const router = express.Router();

router.post('/create', storeTweets);
router.post('/label', labellingTweet);
module.exports = router;
