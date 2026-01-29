const express = require('express');
const cors = require("cors");
const {corsUrl,environmet}=require('./config')
const routes = require('./routes/routes');
//  fun tion to start the server (request, response)

const app = express();
app.use(express.json());
app.use(cors({origin:corsUrl,optionsSuccessStatus:200}));
app.use('/', routes);

// catch 404 and forward to error handler
app.use((err, req, res, next) => {
  // console.error(err);
  res.status(500).json({ message: err.message });
  res.end();
});

module.exports=app
