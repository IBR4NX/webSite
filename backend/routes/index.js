const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("get /");
  res.send("Server is running");
});

module.exports = router;
