// Como primer paso importamos el modelo de chats.

const Chat = require("../../models/Chats");

// En este metodo realizaremos una peticion del tipo get donde traeremos todos los chats
// que existan de manera general y devolveremos una resupuesta con los mismos, en caso de no
// existir devolveremos un mensaje de error.

const getAllChats = async (req, res) => {
  const chats = await Chat.find();
  if (chats.length > 0) {
    res.send(chats);
  } else {
    res.json({ message: "No se encontraron chats" });
  }
};

// En este metodo realizaremos una peticion del tipo get donde traeremos solo el chat junto
// con los mensajes del usuario que los envio, mediante pasar por parametro el correo del mismo
// buscando con el en la base de datos este documento y devolviendo como respuesta en caso de que
// exista dicho chat y mensajes estos mismos, en caso de no existir devolveremos un mensaje de error.

const getChatsByEmail = async (req, res) => {
  const { email } = req.params;
  const chats = await Chat.find({ email });
  if (chats.length > 0) {
    res.send(chats);
  } else {
    res.json({ message: "Error no se encontraron chats para ese correo" });
  }
};

// En este metodo realizaremos una peticion de tipo post para inicializar el documento de chats
// de un determinado usuario, creandolo a partir de su email y adjuntandole dentro un array vacio
// que luego sera el contenedor de los mensajes de este usuario, por ultimo devuelve como respuesta
// el chat creado.

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

// En este metodo realizaremos una peticion de tipo post para realizar el envio de los mensajes
// al documento de la coleccion de chats cuyo email el el enviado en el cuerpo de la peticion,
// adjunto al mismo el mensaje que se debe agregar dentro del array de mensajes de este documento
// si todo concluye adecuadamente devolvera como respuesta el chat, en caso de que no lo haga
// devolvera un mensaje de error

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

// En este metodo realizaremos una peticion de tipo post similar a la anterior solo que en este caso
// la funcion sera eliminar todos los mensasjes realizados por determinado usuario, cambiando el valor
// por un array vacio y devolviendo como respuesta el chat.

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

module.exports = {
  getChatsByEmail,
  getAllChats,
  postChats,
  addMessage,
  deleteMessages,
};
