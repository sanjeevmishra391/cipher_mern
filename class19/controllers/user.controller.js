const { users } = require('../users');

exports.getUser = (req, res) => {
  res.send(users);
}