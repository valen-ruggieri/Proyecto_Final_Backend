# Proyecto_Final_Backend

## Deploy


## Demo


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

## Formularios

### Formulario de registro 
- Permite registrar un usuario y asiganar sus datos a la sesion
- Valida que el usuario no este ya creado, de estarlo no enviara el formulario y mostrara un mensaje
- En caso de ingresar datos no validos o que correspondan a los requeridos por el esquema el formulario no se enviara y mostrara un mensaje

### Formulario de inicio de sesion
- Permite poder reingresar a la tienda en caso de ya haber creado un usuario
- Este mismo mediante el email y password valida que en la base de datos se encuentre ese usuario, de lo contrario moctrara un mensaje
- Si la sesion expira esta misma devolvera al home por lo que la unica forma de poder volver a ingresar es mediante el inicio de sesion

## Tienda
Dentro de la tienda tendremos las opciones:
- Como administrador de agregar, eliminar o editar productos
- Como cliente de agregar productos al carrito, eliminarlos y finalizar la compra


## Validaciones
- Mediante yup y un middleware vamos a tener la validacion de los datos que ingresemos en el formularion antes de que nos redireccione a la tienda
- Tambien tendremos otro middleware que verificara los permisos y si la sesion todavia esta activa, de lo contrario redirigira al login
- Los esquemas nos brindaran mas seguridad a la hora de enviar los datos como asi tambien tendremos las coookies firmadas
- Mediante passport manejaremos los inicios y registros del usuario brinndando una serie de condiconales que permitira evitar errores a la hora de utilizar la app web
- Utilizando bcrypt podremos enviar una contrasena encriptada hacia la base de datos cuando se registra un usuario, de esta manera aumentado la seguridad y minimizando los riesgos, las clave encriptadas luego mediante metodos sera comparada a la hora de iniciar sesion para poder evaluar si pertenece al usuario anteriormente registrado


## Tecnologías
- Node Js
- Express Js
- Mongoose
- MongoDB Atlas
- Yup
- Passport-local
- Bcrypt
- Heroku
- Nodemailer
