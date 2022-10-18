const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const schemaUsers = new Schema({
  userName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
});

schemaUsers.methods.encrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const User = mongoose.model("Users", schemaUsers);

module.exports = User;
