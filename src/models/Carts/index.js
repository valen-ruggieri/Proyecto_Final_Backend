const mongoose = require("mongoose");
const { Schema } = mongoose;

const schemaCarts = new Schema({
  precioTotal: { type: Number, required: true },
  products: { type: Array, required: true },
});

const Cart = mongoose.model("Carts", schemaCarts);

module.exports = Cart;
