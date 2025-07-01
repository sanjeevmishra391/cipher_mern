const express = require('express');
const app = express();

app.use(express.json());

const users = [];
let id = 1;

const isValidUser = (newUser) => {
  return !users.find(user => user.name === newUser.name);
}

// add a user
app.post('/user', function (req, res) {
  const user = req.body;

  if (!isValidUser(user)) {
    res.statusCode = 400;
    res.send('User name is already present');
    return;
  }

  users.push({ id, ...user });
  id++;

  res.statusCode = 201;
  res.send('User created successfully');
  console.log(users);
});

// fetch all users
app.get('/user/list', function (req, res) {
  if (users.length === 0) {
    return res.send('No users present');
  }
  res.send(users);
})

// fetch a specific by id
app.get('/user/:id', function (req, res) {
  const { id } = req.params;

  const user = users.filter(user => {
    return user.id == id;
  });

  if (user.length === 0) {
    return res.send('No user with id ' + id + ' found');
  }

  return res.send(user);
});


app.listen(3000, function() {
  console.log("Server started");
});