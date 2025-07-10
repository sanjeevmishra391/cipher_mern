const { users } = require('../users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, hashedPassword });
  res.send(`User ${username} registered`);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const result = await bcrypt.compare(password, user.hashedPassword);

  if (!result) {
    return res.status(400).json({ message: 'Invalid password credentials' });
  }

  const token = jwt.sign(
    { username },
    process.env.JWT_SECRET,
    { expiresIn: '1m' }
  );

  return res.json({ message: 'User successfully logged in', token });
};