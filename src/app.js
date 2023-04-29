const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const bodyParser = require("body-parser");
const Detail = require("./models/detail");
const Slider = require("./models/slider");
// import routes form main or routes
const routes = require("./routes/main");
const Service = require("./models/service");
//Database Connection
const mongoose = require("mongoose");

// Comfigure HBS Template Engine
app.set("view engine", "hbs");
app.set("views", "views");
app.use("/static", express.static("public"));
// Use the bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// parents samma ko path chaiyo vane __dirname use garne
hbs.registerPartials("views/partials");
// app.get("/login", function (req, res) {
//   res.render("login");
// });

//routes ma vako main file ko routes tanne
app.use("/", routes);
app.use("/user", routes);

app.listen(process.env.PORT | 5555, () => {
  console.log("Server is running");
  // Database connection
  try {
    const mongo = mongoose.connect("mongodb://127.0.0.1:27017/mern", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (mongo) {
      // Service.create([
      //   {
      //     icon: "fa-brands fa-google",
      //     title: "Provide best Cources",
      //     description:
      //       "We provide best course that halps our student in learning and in placements",
      //     linkText: "Check",
      //     link: "https://www.google.com/",
      //   },
      //   {
      //     icon: "fa-brands fa-square-github",
      //     title: "Provide best Cources ",
      //     description:
      //       "We provide best course that halps our student in learning and in placements",
      //     linkText: "Learn",
      //     link: "https://www.github.com/",
      //   },
      //   {
      //     icon: "fa-brands fa-linkedin",
      //     title: "Provide best Cources",
      //     description:
      //       "We provide best course that halps our student in learning and in placements",
      //     linkText: "Visit",
      //     link: "https://www.linkedin.com/feed/",
      //   },
      // ]);

      // Slider.create([
      //   {
      //     title: "First Image",
      //     subTitle: "This is a first image",
      //     imageUrl: "/static/images/slider1.jpg",
      //   },
      //   {
      //     title: "Second Image",
      //     subTitle: "This is a Second image",
      //     imageUrl: "/static/images/slider2.jpg",
      //   },
      //   {
      //     title: "Third Image",
      //     subTitle: "This is a Third image",
      //     imageUrl: "/static/images/slider3.jpg",
      //   },
      // ]);
      // Detail.create({
      //   brandName:"Bibek KC",
      //   links:[
      //     {
      //     label:"Home",
      //     url:"/"
      //   },
      //   {
      //     label:"About Us",
      //     url:"/about"
      //   },
      //   {
      //     label:"Contact Us",
      //     url:"/contact"
      //   },
      //   {
      //     label:"Services",
      //     url:"/services"
      //   },
      //   {
      //     label:"Login",
      //     url:"/login"
      //   }
      // ]
      // })
      console.log("db connected");
    } else {
      console.log("db not connected");
    }
  } catch (error) {
    console.log(error);
  }
});
