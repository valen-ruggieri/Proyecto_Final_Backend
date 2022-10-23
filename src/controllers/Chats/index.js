const Chat = require("../../models/Chats");

const getAllChats = async (req, res) => {
  const chats = await Chat.find();
  if (chats.length > 0) {
    res.send(chats);
  } else {
    res.json({ message: "No se encontraron chats" });
  }
};

const getChatsByEmail = async (req, res) => {
  const { email } = req.params;
  const chats = await Chat.find({ email });
  if (chats.length > 0) {
    res.send(chats);
  } else {
    res.json({ message: "Error no se encontraron chats para ese correo" });
  }
};
const postChats = async (req, res) => {
  const { email } = req.body;
  const messages = [];
  const chat = await Chat.create({
    email,
    messages,
  });
  res.send({
    chat,
  });
};
const addMessage = async (req, res) => {
  const { message, email } = req.body;
  const chatOld = await Chat.find({ email });
  const messages = chatOld.length > 0 ? chatOld[0].messages : false;
  const date = new Date();
  const data = { message, date };
  if (messages) {
    const chat = await Chat.findOneAndUpdate(
      { email },
      {
        messages: messages.length > 0 ? [...messages, data] : [data],
      }
    );
    return res.send(chat);
  }
  res.send("Error no se puede agregar un mensaje por que el chat no existe");
};
const deleteMessages = async (req, res) => {
  const { email } = req.body;
  const chat = await Chat.findOneAndUpdate(
    { email },
    {
      messages: [],
    }
  );
  res.send(chat);
};

const deleteChats = async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findByIdAndDelete(id);
  res.send(chat);
};

module.exports = {
  deleteChats,
  getChatsByEmail,
  getAllChats,
  postChats,
  addMessage,
  deleteMessages,
};
