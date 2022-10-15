const Product = require("../../models/Products");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};
const getProductById = async (req, res) => {
  const { id } = req.params;
  const products = await Product.findById(id);
  res.send({
    _id: products._id,
    titulo: products.titulo,
    descripcion: products.descripcion,
    timestamp: products.timestamp,
    precio: products.precio,
    img: products.img,
    codigo: products.codigo,
  });
};
const postProducts = async (req, res) => {
  const { titulo, descripcion, timestamp, precio, img, codigo } = req.body;
  const products = await Product.create({
    titulo,
    descripcion,
    timestamp,
    precio,
    img,
    codigo,
  });
  res.send({
    _id: products._id,
    titulo: products.titulo,
    descripcion: products.descripcion,
    timestamp: products.timestamp,
    precio: products.precio,
    img: products.img,
    codigo: products.codigo,
  });
};
const putProducts = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, timestamp, precio, img, codigo } = req.body;
  const products = await Product.findByIdAndUpdate(id, {
    titulo,
    descripcion,
    timestamp,
    precio,
    img,
    codigo,
  });
  res.send({
    _id: products._id,
    titulo: products.titulo,
    descripcion: products.descripcion,
    timestamp: products.timestamp,
    precio: products.precio,
    img: products.img,
    codigo: products.codigo,
  });
};
const deleteProducts = async (req, res) => {
  const { id } = req.params;
  const products = await Product.findByIdAndRemove(id);
  res.send(products);
};

module.exports = {
  deleteProducts,
  getProducts,
  postProducts,
  putProducts,
  getProductById,
};
