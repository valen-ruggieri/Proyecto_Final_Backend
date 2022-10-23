
<h1 align="center">  Techcommerce API</h1>

![Purple Blue Colorful Gaming LinkedIn Banner](https://user-images.githubusercontent.com/93409437/197376008-371a2c23-167e-47dc-abbe-f21de747581b.png)

## Deploy

https://tech-commerce.herokuapp.com/

## Inicio
Esta es la presentacion del proyecto final de backend en el cual llevaremos a cabo la creacion de una API de un ecommerce de tecnologia.
Utilizando los conocimientos adquiridos a lo largo del cursado de esta comision, realixzaremos la creacion de cada ruta, controlador, conexion con base de datos, 
middlewares de autenticacion, autorizacion y validaciones, registros, tokens y muchas mas caracteristicas incluidas en este proyecto.


## Arquitectura por capas
- Database
- Controllers
- Services
- Routes
- Server

## Registro

### Log In
- Permite registrar un usuario y asiganar sus datos a la sesion
- Valida que el usuario no este ya creado, de estarlo no enviara el formulario y mostrara un mensaje
- En caso de ingresar datos no validos o que correspondan a los requeridos por el esquema el formulario no se enviara y mostrara un mensaje

### Sign In
- Permite poder reingresar a la tienda en caso de ya haber creado un usuario
- Este mismo mediante el email y password valida que en la base de datos se encuentre ese usuario, de lo contrario moctrara un mensaje
- Si la sesion expira esta misma devolvera al home por lo que la unica forma de poder volver a ingresar es mediante el inicio de sesion

## Tienda
Dentro de la tienda tendremos las opciones:
- Agregar, eliminar o editar productos.
- Agregar productos al carrito y eliminarlos del mismo.
- Generar un chat y enviar mensajes dentro del mismo.
- Crear ordenes junto con alertas via mail para concluir con las compras.
- Poder consultar sobre mis mensajes del chat como tambien mis ordenes generadas.


## Validaciones
- Mediante yup y un middleware vamos a tener la validacion de los datos que ingresemos en las peticiones a la hora de crear, agrtegar u editar datos,
para que de esta forma cumplan con ciertos formatos y estructuras.
- Tambien tendremos middlewares que verificaran los permisos y si las sesiones todavia estan activas mediante la verificacion del token al crear una cuenta o iniciar sesion.
- Los esquemas nos brindaran mas seguridad a la hora de enviar los datos como asi tambien tendremos las coookies firmadas donde alojaremos el token.
- Utilizando bcrypt podremos enviar una contrasena encriptada hacia la base de datos cuando se registra un usuario, de esta manera aumentado la seguridad y minimizando los riesgos, las clave encriptadas luego mediante metodos sera comparada a la hora de iniciar sesion para poder evaluar si pertenece al usuario anteriormente registrado.


## Tecnologías
- Node Js
- Express Js
- Mongoose
- MongoDB Atlas
- Yup
- Bcrypt
- Heroku
- Nodemailer
- Json Web Token
  
  
 
