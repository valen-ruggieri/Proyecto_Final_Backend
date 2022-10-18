require("dotenv").config;
const express = require("express");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.URI,
      ttl: 10,
      autoRemove: "interval",
    }),
  })
);
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
