const express = require("express");
const app = express();
const routerCarts = require("./routes/Carts/index");
const routerChats = require("./routes/Chats/index");
const routerLogin = require("./routes/Login/index");
const routerProducts = require("./routes/Products/index");
const routerSignin = require("./routes/Signin");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/carts", routerCarts);
app.use("/chats", routerChats);
app.use("/login", routerLogin);
app.use("/signin", routerSignin);
app.use("/products", routerProducts);
module.exports = app;
