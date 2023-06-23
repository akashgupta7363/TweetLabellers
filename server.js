const express = require('express');
const app = express();
const dotenv = require('dotenv');
const labellingTweet = require('./controllers/contentControllers');
dotenv.config();
const connectDB = require('./config/db');
const cronJob = require('./cronTasks/cronJob');
connectDB();
const contentRoutes = require('./routes/contentRoutes');

app.use('/api/v1/tweets', contentRoutes);
app.get('/', (req, res) => {
  res.send(`API is runningon ${process.env.PORT}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is runningon ${process.env.PORT}`);
});
