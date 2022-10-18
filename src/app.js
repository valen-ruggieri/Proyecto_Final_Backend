require("dotenv").config;
const express = require("express");
const app = express();

const routerCarts = require("./routes/Carts/index");
const routerChats = require("./routes/Chats/index");
const routerProducts = require("./routes/Products/index");
const routerUsers = require("./routes/Users");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/carts", routerCarts);
app.use("/chats", routerChats);
app.use("/", routerUsers);
app.use("/products", routerProducts);
module.exports = app;
