const Chat = require("../../models/Chats");
const getChatsById = async (req, res) => {
  const id = req.params.id;
  const chats = await Chat.findById(id);
  res.send(chats);
};
const postChats = async (req, res) => {
  const { userName } = req.body;
  const messages = [];
  const chat = await Chat.create({
    userName,
    messages,
  });
  res.send({
    chat,
  });
};
const addMessage = async (req, res) => {
  const { message, id } = req.body;
  const { messages } = await Chat.findById(id);
  const date = new Date();
  const data = { message, date };
  const chat = await Chat.findByIdAndUpdate(id, {
    messages: messages != [] ? [...messages, data] : [data],
  });
  res.send({
    chat,
  });
};
const deleteMessages = async (req, res) => {
  const { id } = req.body;
  const chat = await Chat.findByIdAndUpdate(id, {
    messages: [],
  });
  res.send({
    chat,
  });
};

const deleteChats = async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findByIdAndDelete(id);
  res.send(chat);
};

module.exports = {
  deleteChats,
  getChatsById,
  postChats,
  addMessage,
  deleteMessages,
};
