const mongoose = require("mongoose");

const Contact = mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  number: Number,
  message: String,
});

module.exports = mongoose.model("contacts", Contact);
