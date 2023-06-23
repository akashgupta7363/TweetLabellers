const nodeCron = require('node-cron');

const cronJob = nodeCron.schedule('59 23 * * *', async () => {
  console.log(new Date().toLocaleString());
});

module.exports = cronJob;
