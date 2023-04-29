const mongoose = require("mongoose");

const About = mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  number: Number,
  message: String,
});

module.exports = mongoose.model("abouts", About);
