const { users } = require('../users');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.send(`User ${username} registered`);
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  if (password !== user.password) {
    return res.status(400).json({ message: 'Invalid password credentials' });
  }

  const token = jwt.sign(
    { username },
    'verysecretkey',
    { expiresIn: '1m' }
  );

  return res.json({ message: 'User successfully logged in', token });
};