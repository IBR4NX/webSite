const express = require("express");
const router = express.Router();
const { user } = require("../db");
const path = require("path");
// router.use(cors);
router.use(express.static(path.join(__dirname, "../views")));

const authentication = require("./authentication.js");
const registerRoutes = require("./register");

router.use("/auth", authentication);
router.use("/auth", registerRoutes);

// router.post("/test", async  (req, res) => {
//     const { email, password, name, number } = req.body;
//      if (!email || !password || !name) {
//     return res.status(400).json({ error: "Email, password and name are required" });
//   }

//     res.status(200).json("the new save"+req.body.email);
// });
// router.get("/", async (req, res) => {
  
//     const date = new Date();
//     // console.log(path.join(__dirname, "../views"));

//     res.render("index.ejs", {
//     time: date.toLocaleTimeString(),
//   });
// });
router.get(/.*/, async (req, res)=>{
    console.log("/:path(*): Header :",req.headers);
    console.log("/:path(*): Header :",req.body);
    res.end();
    return;

});
router.post("/", async (req, res)=>{
    console.log("/:path(*): Header :",req.headers);
    console.log("/:path(*): Body :",req.body);
    res.render('index.ejs');
    return;

});

module.exports = router;
