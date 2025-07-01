const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  console.log("At the home path");
  res.send('Hello there. It was nice meeting you.');
});

app.get('/bye', function (req, res) {
  console.log(req.headers);
  res.send('Bye...');
});

app.post('/user', function (req, res) {
  const { name } = req.body;
  res.send(`user ${name} created successfully`);
});

const PORT = 3001;

app.listen(PORT, function () {
  console.log(`Server started at ${PORT}`);
});

