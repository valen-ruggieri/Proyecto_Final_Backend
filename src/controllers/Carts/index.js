const Cart = require("../../models/Carts");
const Product = require("../../models/Products");
const getCarts = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const carts = await Cart.findById(id);
  res.send({
    _id: carts._id,
    precioTotal: carts.precioTotal,
    products: carts.products,
  });
};
const postCarts = async (req, res) => {
  const { precioTotal, products } = req.body;
  const carts = await Cart.create({
    precioTotal,
    products,
  });
  res.send({
    _id: carts._id,
    precioTotal: carts.precioTotal,
    products: carts.products,
  });
};

const addProductInCart = async (req, res) => {
  const { idCart, idProduct } = req.body;
  const product = await Product.findById(idProduct);
  let cart = await Cart.findById(idCart);
  let cartEdit = cart.products;
  const response = await Cart.findByIdAndUpdate(idCart, {
    products: [...cartEdit, { ...product }],
  });
  res.send(response);
};
const deleteProductInCart = async (req, res) => {
  const { idCart, idProduct } = req.body;
  const product = await Product.findById(idProduct);
  let cart = await Cart.findById(idCart);
  let cartEdit = cart.products.filter((e) => e.codigo !== product.codigo);
  console.log(cartEdit);
  const response = await Cart.findByIdAndUpdate(idCart, {
    products: [...cartEdit],
  });
  res.send(response);
};
const deleteAllProducts = async (req, res) => {
  const { id } = req.params;
  const cart = await Cart.findByIdAndUpdate(id, {
    products: [],
  });
  res.send(cart);
};
const deleteCarts = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const cart = await Cart.findByIdAndDelete(id);
  res.send(cart);
};

module.exports = {
  getCarts,
  postCarts,
  deleteCarts,
  addProductInCart,
  deleteProductInCart,
  deleteAllProducts,
};
