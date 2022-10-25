// Como primer paso importamos el modelo de ordenes.

const Order = require("../../models/Orders/index");

// Luego importaremos la funcion de nodemailer que envia un correo al usuario

const { sendMailTicket } = require("../../utils/mail");

// En este metodo realizaremos una peticion del tipo get donde traeremos todas las ordenes
// de un usuario determinado por el mail que debera pasar por parametro de la consulta, luego
// mediante el mismo se lo buscara dentro de la base de datos en la coleccion de ordenes
// y retornara como respuesta todas las ordenes del mismo en caso de exito, por otra parte
// si el correo ingresado no corresponde a ningun documento retornara un mensaje de error

const getOrderByEmail = async (req, res) => {
  const { email } = req.params;
  const order = await Order.find({ email });
  if (order.length > 0) {
    return res.send(order);
  } else {
    return res.json({ message: "Error no se encontro ninguna orden" });
  }
};

// En este metodo realizaremos una peticion del tipo post donde mediante los datos obtenido
// en el cuerpo de la consulta realizaremos la creacion de una orden dentro de la base de datos
// verificanto si todos los datos obtenidos existen y enviando un mail al correo del usuario
// una vez se crea la orden.
// Devolvemos como respuesta la misma orden o en caso de que existiera algun error
// devolvemos el mensaje de error como respuesta

const postOrder = async (req, res) => {
  const { email, date, precioTotal, products } = req.body;
  if (email && date && precioTotal && products) {
    const order = await Order.create({
      email,
      date,
      precioTotal,
      products,
    });
    sendMailTicket(email, date, precioTotal, products);
    return res.send(order);
  }
  res.json({ message: "Error campos o datos invalidos/vacios" });
};

// En este metodo realizaremos una peticion del tipo delete donde mediante los datos obtenidos
// por parametro, buscaremos coincidencias en la base de datos y eliminaremos la orden adjunta
// a ese usuario, devolviendo como respuesta la orden eliminada

const deleteOrder = async (req, res) => {
  const { email } = req.params;
  const order = await Order.findOneAndDelete({ email });
  res.send(order);
};

module.exports = { getOrderByEmail, deleteOrder, postOrder };
