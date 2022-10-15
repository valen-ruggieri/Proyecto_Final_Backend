const mongoose = require("mongoose");
const { Schema } = mongoose;

const schemaChats = new Schema({
  date: { type: String, required: true },
  userame: { type: String, required: true },
  message: { type: String, required: true },
});

const Chat = mongoose.model("Chats", schemaChats);

module.exports = Chat;
