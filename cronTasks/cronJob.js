const nodeCron = require('node-cron');

const cronJob = nodeCron.schedule('0 12 * * *', async () => {
  console.log(new Date().toLocaleString());
});

module.exports = cronJob;
