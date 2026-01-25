const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");
const indexRoutes = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", indexRoutes);

console.log("run");
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
