const bcrypt = require("bcrypt");

const comparePassword = async (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};
module.exports = comparePassword;
