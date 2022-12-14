// En este archivo de configuracion traemos mediante dotenv la key de mongoDB para poder
// realizar la conexion a la base de datos.

require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connect to Mongo database");
  })
  .catch((err) => {
    console.log(err);
  });
