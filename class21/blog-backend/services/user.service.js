const User = require('../models/user.model');
const { isValidObjectId } = require('../utils/MongooseUtils');

exports.getUserById = async (id) => {
  isValidObjectId(id);
  const user = await User.findById(id);
  const responseUser = { username: user.username, _id: user._id, email: user.email };
  return responseUser;
}