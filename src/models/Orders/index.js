const mongoose = require("mongoose");
const { Schema } = mongoose;

const schemaOrders = new Schema({
  email: { type: String, required: true },
  date: { type: String, required: true },
  precioTotal: { type: Number, required: true },
  products: { type: Array, required: true },
});

const Order = mongoose.model("Orders", schemaOrders);

module.exports = Order;
