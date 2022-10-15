const Chat = require("../../models/Chats");
const getChats = async (req, res) => {
  const id = req.params.id;
  const chats = await Chat.findById(id);
  res.send(chats);
};
const postChats = async (req, res) => {
  res.send("getCarts");
};
const putChats = async (req, res) => {
  res.send("getCarts");
};
const deleteChats = async (req, res) => {
  res.send("getCarts");
};

module.exports = { deleteChats, getChats, postChats, putChats };
