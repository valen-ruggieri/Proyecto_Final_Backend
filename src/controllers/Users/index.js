// Como primer paso importamos el modelo de usuarios.

const User = require("../../models/Users");

// Luego importamos json web token que utilizaremos

const jwt = require("jsonwebtoken");

// Importamos tambien la constante 'secret' que nos servira para cifrar el token

const { secret } = require("../../utils/token/index");

// Tambien la funcion con nodemailer que nos permitira mandar un mail alk usuario

const { sendMailWelcome } = require("../../utils/mail");

// Importaremos tambien una funcion que utiliza bcrypt para comparar las contrasenas

const comparePassword = require("../../models/Users/bcrypt");

// En este metodo realizaremos una peticion del tipo post donde traeremos mediante el cuerpo de la
// consulta los datos del usuario a crear, los cuales seran verificados para no generar dos cuentas con
// datos similares, en caso de pasar la verificacion se realizara una comparacion entre la contrasena
// introducida y su confirmacion, para luego pasar a crear una constante con los datos del usuario.
// De la misma constante editaremos su contrasena encriptandola, para luego crear el usuario en
// la base de datos.
// Paso siguiene generar el token donde guardaremos en el mismo el id del usuario creado
// utilizaremos la variable 'secret' que importamos y asignaremos una expiracion al mismo token
// de esta manera mediante unas validaciones de middleware podremos utilizar este toke a modo se sesion.
// Una vez todo resulte con exito asignaremos este toke a un cookie secreta y utilizaremos la funcion de
// nodemailer para poder enviar un m,ensaje de bienvenida al correo del usuario.
// Por ultimo rerdirigiremos al usuario hacia la direccion donde se encuentran los productos.
// En caso de que la verificacion no se concrete por la existencia anterior de esa cuenta
// retornara un mensaje de error.

const logIn = async (req, res) => {
  const { userName, email, password, confirmPassword, phone } = req.body;
  const userExist = await User.find({ email: email });
  const verifyEmail = userExist[0] ? userExist[0].email : null;
  if (verifyEmail !== email) {
    if (password == confirmPassword) {
      const user = new User({ userName, email, password, phone });
      user.password = await user.encrypt(user.password);
      const response = await User.create(user);
      const tokenAuth = jwt.sign({ idUser: response._id }, secret, {
        expiresIn: 60 * 60 * 24,
      });
      res.cookie("tokenAuth", tokenAuth, { signed: true });
      sendMailWelcome(userName, email, phone);
      return res.redirect("/products");
    }
  } else {
    return res.json({ message: "email ya existente" });
  }
};

// En este metodo realizaremos una peticion del tipo post donde mediante los datos requeridos en el
// cuerpo de la consulta, realizaremos una busqueda en la base de datos/coleccion usuarios, para poder
// encontrar algun usuario que coincida.
// En caso de que se encuentro un usuario que coincida con la direccion de correo buscada, debera
// cumplir con otra condicion que sera la de mediante la funcion de comparacion de bycrpt devolver
// si la contrasena requeria es igual a la del documento que traemos de la base de datos.
// Por lo tanto en caso de coinicidir= cumplira con la condicion y generara un token de manera similar
// que registrando la cuenta, con su expiracion, clave y cookie donde se aloja el mismo.
// Por ultimo redireccionara hacia la seccion de productos.
// En caso de que la cuenta al verificarse se compruebe que no existe retornara el mensaje
// de error correspondiente.

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email });
  if (user[0].password) {
    const succesPass = await comparePassword(password, user[0].password);
    if (succesPass) {
      const tokenAuth = jwt.sign({ idUser: User._id }, secret, {
        expiresIn: 60 * 60 * 24,
      });
      res.cookie("tokenAuth", tokenAuth, { signed: true });
      return res.redirect("/products");
    }
  }
  res.json({ message: "no exite la sesion que quieres iniciar" });
};

// En este metodo realizaremos una peticion del tipo post donde unicamente
// eleiminaremos el token alojado dentro de la cookie de esta manera
// dejando al usuario sin acceso y deslogeando el mismo al quitar los permisos.

const logOut = async (req, res) => {
  res.cookie("tokenAuth", "", { signed: true });
  res.json({ message: "logOut in session" });
};
module.exports = { signIn, logIn, logOut };
