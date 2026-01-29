const express = require("express");
const router = express.Router();
const { user } = require("../db");
const path = require("path");
const asyncHandler=require('../helpers/asyncHandler.js')
router.use(express.static(path.join(__dirname, "../views")));

const authentication = require("./authentication.js");
const registerRoutes = require("./register");

router.use("/auth", authentication);
router.use("/auth", registerRoutes);

router.get("/test", async (req, res)=>{
    // console.log("get test");
    // console.log("/:path(*): Header :",req.headers);
    // console.log("/:path(*): Body :",req.body);
    // res.render('index.ejs');
    res.send("Test");
    // return;
});
router.get(/.*/,asyncHandler( async (req, res)=>{
    throw new Error('Test Get Error')
}),()=>{
    console.log("/:path(*): Header :",req.headers);
    console.log("/:path(*): Body :",req.body);
}
);

module.exports = router;
