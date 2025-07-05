const express = require('express');
const app = express();

function reqHandler(req, res, next) {
  console.log(req.originalUrl);
  console.log('In the request handler');
  console.log('Request received at ' + Date.now());
  next();
}

function resHandler(req, res, next) {
  console.log('In the response handler');
  next();
}

app.use(reqHandler);

app.get('/', (req, res, next) => {
  console.log('In the route');
  res.send('Some response');
  next();
});

app.use(resHandler);

app.listen(3000, function () {
  console.log("Server started");
});