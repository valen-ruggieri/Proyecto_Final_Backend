const express = require("express");
const app = express();
const routerCarts = require("./routes/Carts");
const routerChats = require("./routes/Chats");
const routerLogin = require("./routes/Login");
const routerProducts = require("./routes/Products");
const routerSignin = require("./routes/Signin");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", (res, req) => {
  console.log("gfhhfghg");
});
app.use("/Carts", routerCarts);
app.use("/Chats", routerChats);
app.use("/Login", routerLogin);
app.use("/Signin", routerSignin);
app.use("/Products", routerProducts);
module.exports = app;
