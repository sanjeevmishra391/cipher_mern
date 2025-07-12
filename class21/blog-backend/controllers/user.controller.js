const bcrypt = require('bcrypt');
const User = require('../models/user.model');

exports.createUser = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { username, password: hashedPassword, email };
  const newUser = await User.insertOne(user);
  return res.status(201).json({ message: 'User created', newUser });
};