const Product = require("../../models/Products");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};
const getProductById = async (req, res) => {
  const { id } = req.params;
  if (id.length == 24) {
    const products = await Product.findById(id);
    if (products) {
      return res.send({
        _id: products._id,
        titulo: products.titulo,
        descripcion: products.descripcion,
        timestamp: products.timestamp,
        precio: products.precio,
        img: products.img,
        codigo: products.codigo,
        categoria: products.categoria,
      });
    }
    return res.json({ message: "Error producto no encontrado" });
  }
  res.json({ message: "Error longitud de id incorrecta" });
};

const getByCategory = async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ categoria: category });
  res.send(products);
};

const postProducts = async (req, res) => {
  const { titulo, descripcion, precio, img, codigo, categoria } = req.body;
  const timestamp = new Date();
  const products = await Product.create({
    titulo,
    descripcion,
    timestamp,
    precio,
    img,
    codigo,
    categoria,
  });
  res.send({
    _id: products._id,
    titulo: products.titulo,
    descripcion: products.descripcion,
    timestamp: products.timestamp,
    precio: products.precio,
    img: products.img,
    codigo: products.codigo,
    categoria: products.categoria,
  });
};
const putProducts = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, timestamp, precio, img, codigo, categoria } =
    req.body;
  const products = await Product.findByIdAndUpdate(id, {
    titulo,
    descripcion,
    timestamp,
    precio,
    img,
    codigo,
    categoria,
  });
  res.send({
    _id: products._id,
    titulo: products.titulo,
    descripcion: products.descripcion,
    timestamp: products.timestamp,
    precio: products.precio,
    img: products.img,
    codigo: products.codigo,
    categoria: products.categoria,
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
  getByCategory,
};
