const express = require("express");

const app = express();
const router = express.Router();
const Detail = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/service");

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
