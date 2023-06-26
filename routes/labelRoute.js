const express = require('express');
const { storeLabels } = require('../controllers/labelController.js');
const router = express.Router();

router.post('/store', storeLabels);
module.exports = router;
