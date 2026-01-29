import express from "express"
const router = express.Router();
import path from "path";
import asyncHandler from '../helpers/asyncHandler'
router.use(express.static(path.join(__dirname, "../views")));
// import authentication = require("./authentication.js");
import registerRoutes  from "./register"

// router.use("/auth", authentication);
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
}),(req,res)=>{
    console.log("/:path(*): Header :",req.headers);
    console.log("/:path(*): Body :",req.body);
}
);

module.exports = router;
