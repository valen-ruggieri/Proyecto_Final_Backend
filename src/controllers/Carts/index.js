// Como primer paso importamos el modelo del carrito.

const Cart = require("../../models/Carts");

// Luego importamos tambien al modelo de productos ya que lo vamos a utilizar.

const Product = require("../../models/Products");

// En este metodo realizaremos una peticion del tipo get donde indicaremos el id del carrito
// por parametros en la url de nuestro sitio.
// Luego realizaremos una busqueda en la base de datos y la coleccion de carrito
// sobre un documento cuyo id sea el indicado por parametro.
// Una ves resuelta la busqueda enviaremos como respuesta los datos del carrito solicitado.

const getCarts = async (req, res) => {
  const { id } = req.params;
  const carts = await Cart.findById(id);
  res.send({
    _id: carts._id,
    precioTotal: carts.precioTotal,
    products: carts.products,
  });
};

// En este metodo realizaremos una peticion de tipo post enviando por cuerpo los datos del
// precio total y los productos, para luego utilizarlos a la hora de crear un documento
// dentro de la base de datos en la coleccion de carritos.
// Por ultimo a modo de respuesta devolveremos los datos del carrito creado.

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

// En este metodo realizaremos una peticion de tipo post enviando por cuerpo los datos del
// id del carrito y del id del producto seleccionado, de esta manera realizara tres peticiones a la
// base de datos: la primera para buscar y traer el producto cuyo id fue requerido, la segunda
// para buscar y traer el carrito cuyo id tambien fue requerido, y por ultimo la tercera
// en la cual mediante el id del carrito actualizara el mismo agregando el producto anteriormente
// seleccionado y devolviendo una respuesta del carrito seleccionado.

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

// En este metodo realizaremos una peticion del tipo post similar a la anterior, solo que en este caso
// en vez de agregar el producto al carrito lo eliminaremos del mismo mediante un filtrado de los
// productos del carrito que su codigo coinicida con el del producto seleccionado para eliminar
// de esta manera generando un nuevo array el cual sustituira al anterio simulando una eliminacion
// del producto y por ultimo devolviendo como respuesta el carrito seleccionado

const deleteProductInCart = async (req, res) => {
  const { idCart, idProduct } = req.body;
  const product = await Product.findById(idProduct);
  let cart = await Cart.findById(idCart);
  let cartEdit = cart.products.filter((e) => e.codigo !== product.codigo);
  const response = await Cart.findByIdAndUpdate(idCart, {
    products: [...cartEdit],
  });
  res.send(response);
};

// En este metodo realizaremos una peticion del tipo post similar a la anterior, solo que en este caso
// en vez de agregar el producto o eliminarlo, reemplazaremos el array de productos situado dentro del documento
// seleccionado, por uno que se encuentra vacio, simulando la eliminacion de todos los productos
// del carrito seleccionado y devolviendo como respuesta este mismo

const deleteAllProducts = async (req, res) => {
  const { id } = req.params;
  const cart = await Cart.findByIdAndUpdate(id, {
    products: [],
  });
  res.send(cart);
};

// En este metodo realizaremos una peticion del tipo delete para poder encontrar y eliminar el
// documento en el que situa nuestro carrito mediante la busqueda y posterior descarte del mismo
// en la base de datos, por ultimo devolviendo como respuesta el carrito eliminado

const deleteCarts = async (req, res) => {
  const { id } = req.params;
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
