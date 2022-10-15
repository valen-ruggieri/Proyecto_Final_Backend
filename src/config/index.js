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
