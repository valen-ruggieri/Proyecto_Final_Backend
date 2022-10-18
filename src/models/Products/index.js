const mongoose = require("mongoose");
const { Schema } = mongoose;
const schemaProducts = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  timestamp: { type: String, required: true },
  precio: { type: Number, required: true },
  img: { type: String, required: true },
  codigo: { type: String, required: true },
});

const Product = mongoose.model("Products", schemaProducts);

module.exports = Product;
