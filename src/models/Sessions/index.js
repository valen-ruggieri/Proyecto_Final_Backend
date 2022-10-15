const mongoose = require("mongoose");
const { Schema } = mongoose;
const schemaSessions = new Schema({
  expires: { type: Date, required: true },
  session: { type: Object, unique: false, required: true },
});

const Session = mongoose.model("Sessions", schemaSessions);

module.exports = Session;
