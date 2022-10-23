const Order = require("../../models/Orders/index");
const { sendMailTicket } = require("../../utils/mail");
const getOrderByEmail = async (req, res) => {
  const { email } = req.params;
  const order = await Order.find({ email });
  if (order.length > 0) {
    return res.send(order);
  } else {
    return res.json({ message: "Error no se encontro ninguna orden" });
  }
};
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
const deleteOrder = async (req, res) => {
  const { email } = req.params;
  const order = await Order.findOneAndDelete({ email });
  res.send(order);
};

module.exports = { getOrderByEmail, deleteOrder, postOrder };
