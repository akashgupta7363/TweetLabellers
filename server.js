const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const connectDB = require('./config/db');
connectDB();
app.get('/', (req, res) => {
  res.send(`API is runningon ${process.env.PORT}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is runningon ${process.env.PORT}`);
});
