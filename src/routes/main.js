const express = require("express");

const app = express();
const router = express.Router();
const Detail = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/service");
const Contact = require("../models/contact");
const About = require("../models/about");
const Footer = require("../models/footer");

router.get("/welcome", (req, res) => {
  res.send("Hello from home");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "644b68450f99ef4cf6c758e8" });
  const slides = await Slider.find();
  const service = await Service.find();
  // console.log(slider);
  // console.log(details)
  res.render("index", {
    //index view ma pathayeko data haru
    details: details,
    slides: slides,
    service: service,
    // slider: slider?.reverse(),
  });
});

router.get("/contact", async (req, res) => {
  const details = await Detail.findOne({ _id: "644b68450f99ef4cf6c758e8" });
  res.render("contact", {
    details: details,
  });
});

router.get("/about", async (req, res) => {
  const details = await Detail.findOne({ _id: "644b68450f99ef4cf6c758e8" });
  res.render("about", {
    details: details,
  });
});

router.post("/action-form", async (req, res) => {
  try {
    const data = await Contact.create(req.body);
    console.log(data);
    res.redirect("/contact");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});
// router.post("/slider", async function (req, res) {
//   const title = req.body.title;
//   const subtitle = req.body.subtitle;
//   const file = req.body.file;
//   const slider = new Slider({
//     title: title,
//     subTitle: subtitle,
//     imageUrl: file,
//   });

//   const savedSlider = await slider.save();
//   if (savedSlider) {
//     console.log(savedSlider);
//     res.redirect("/");
// app.use("/slider", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   app.get("/", (req, res) => {
//     res.render(
//       "index",
//       JSON.stringify({
//         slider: savedSlider,
//       })
//     );
//   });
// });
//   } else {
//     console.log("error");
//   }
// });

module.exports = router;
