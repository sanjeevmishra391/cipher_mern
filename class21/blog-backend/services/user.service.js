const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { isValidObjectId } = require('../utils/MongooseUtils');
const { BadRequestError } = require('../exception-handling/CustomErrors');

exports.createUser = async (userData) => {

  const existingUser = await User.find({ username: userData.username });
  console.log(existingUser);

  if (existingUser.length > 0) {
    throw new BadRequestError('Username is taken');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = { username: userData.username, password: hashedPassword, email: userData.email };
  const newUser = await User.insertOne(user);

  return newUser;
}

exports.getUserById = async (id) => {
  isValidObjectId(id);
  const user = await User.findById(id);
  const responseUser = { username: user.username, id: user._id, email: user.email };
  return responseUser;
}