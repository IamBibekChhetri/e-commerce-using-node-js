const mongoose = require("mongoose");

const Footer = mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  number: Number,
  message: String,
});

module.exports = mongoose.model("footers", Footer);
