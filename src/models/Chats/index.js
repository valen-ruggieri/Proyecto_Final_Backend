const mongoose = require("mongoose");
const { Schema } = mongoose;

const schemaChats = new Schema({
  email: { type: String, required: true },
  messages: { type: Array, required: true },
});

const Chat = mongoose.model("Chats", schemaChats);

module.exports = Chat;
