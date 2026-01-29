const express = require('express');
// const dotenv = reqire('dotenv');
const app = express();
const startTime=Date.now();
//  fun tion to start the server (request, response)
const routes = require('./routes/routes');
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use('/', routes);

// ####################################################
//      UI function to print the server info
const PORT = process.env.PORT || 3000;
const {printUI,showHelp,showURLs,openBrowser}=require('./ui');
// start server
function startServer() {
  server = app.listen(PORT, printUI(PORT,startTime));
};

startServer();
// keyboard interaction
process.stdin.on('data', (data) => {
  const key = data.toString().trim();
  if (key === 'm') run().catch(console.dir);
  if (key === 'h') showHelp();
  if (key === 'u') showURLs(PORT);
  if (key === 'o') openBrowser(PORT);
  if (key === 'c') {
    console.clear();
    // printUI(PORT,startTime);
  }
  if (key === 'r') {
    console.log('\x1b[33mRestarting server...\x1b[0m');
    server.close(() => startServer());
  }
  if (key === 'q') {
    console.log('\x1b[31mServer stopped\x1b[0m');
    process.exit(0);
  }
});


