const express = require('express');
const app = express();

const urlRequestHandler = (req, res, next) => {
  console.log("Request received for " + req.originalUrl);
  next();
}

const timeStampHandler = (req, res, next) => {
  console.log("Request was received at " + Date.now());
  next();
}

app.use(urlRequestHandler)
  .use(timeStampHandler);

app.get('/', (req, res, next) => {
  res.send('Home page...');
  next();
});

app.use((req, res, next) => {
  console.log('Response sent');
  next();
});

app.listen(3000, function () {
  console.log("server started");
});