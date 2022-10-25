// Como primer paso importamos el modelo de productos.

const Product = require("../../models/Products");

// En este metodo realizaremos una peticion del tipo get donde traeremos todas los productos
// mediante la busqueda de todos los documentos dentro de la coleccion de productos
// en nuestra base de datos, devolviendo como respuesta los mismos.

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

// En este metodo realizaremos una peticion del tipo get donde traeremos los detalles
// sobre un producto en especifico, pasando su id por parametro para poder buscarlo
// dentro de la base de datos, este id debe tenes la cantidad estimdad de digitos para ser valido
// y debe existir un producto con el mismo, en casdo de cumplirse estas condiciones retornara
// el producto junto con los detalles del mismo.
// Por el contrario en caso de que algunas de las condiciones no se cumpla devolvera como
// respuesta el correspondiente mensaje de error

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

// En este metodo realizaremos una peticion del tipo get donde traeremos todos los
// productos que correspondan a la categoria enviada por parametro.
// Bucando los mismos en la base de datos y devolviendolos como respuesta.

const getByCategory = async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ categoria: category });
  res.send(products);
};

// En este metodo realizaremos una peticion del tipo post donde crearemos un
// nuevo producto con los datos requeridos en el cuerpo de la consulta
// agregando la fecha en el que se realizo la operacion y creando un
// documento en la base de datos/ collecion de productos, donde
// sera agregado el mismo.
// Por ultimo devolveremos como respuesta los datos del producto creado.

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

// En este metodo realizaremos una peticion del tipo put donde editaremos el prducto
// cuyo id sea el pasado por parametro, realizando una busqueda en la base de datos
// y cambiando los valores del documento en el que se situa por los obtenidos en
// el cuerpo de la consulta.
// Por ultimo devolveremos como respuesta los datos del producto que se edito.

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

// En este metodo realizaremos una peticion del tipo delete donde mediante los datos obtenidos
// por parametro, buscaremos coincidencias en la base de datos y eliminaremos el producto
// cuyo id corresponda, devolviendo como respuesta el producto eliminado.

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
