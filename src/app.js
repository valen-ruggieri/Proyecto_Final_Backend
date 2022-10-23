require("dotenv").config;
const express = require("express");
const app = express();

const routerCarts = require("./routes/Carts/index");
const routerChats = require("./routes/Chats/index");
const routerProducts = require("./routes/Products/index");
const routerUsers = require("./routes/Users");
const routerOrders = require("./routes/Orders/index");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/carts", routerCarts);
app.use("/chats", routerChats);
app.use("/orden", routerOrders);
app.use("/", routerUsers);
app.use("/products", routerProducts);
module.exports = app;
