const monsgoose = require("mongoose");
const Detail = monsgoose.Schema({
  brandName: String,
  logo: String,
  links: [
    {
      label: String,
      url: String,
    },
  ],
});

module.exports = monsgoose.model("detail", Detail);
