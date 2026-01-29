const express = require('express');
//      UI
const os =require('os');
const {exec} = require('child_process');
// reqire('dotenv').config();
const app = express();
const startTime=Date.now();
//  fun tion to start the server (request, response)
app.get('/', (req, res) => {
  
    res.send('Hello World!'); // send a response to the client
});

// port
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, () => {
  const timeTaken = Date.now() - startTime;
  const localURL = `http://localhost:${PORT}/`;
  const networkIP = Object.values(os.networkInterfaces())
    .flat()
    .find(i => i.family === 'IPv4' && !i.internal)?.address;
  const networkURL = networkIP
    ? `http://${networkIP}:${PORT}/`
    : 'Unavailable';
  console.clear();
  console.log(`\x1b[1;32m➜  Server\x1b[0m ready in \x1b[1;37m ${endTime-startTime} ms\x1b[0m`);
  console.log(`\x1b[1;37m➜  Local:\x1b[36m    ${localURL}\x1b[0m`);
  console.log(`\x1b[1;37m➜  Network:\x1b[36m  ${networkURL}\x1b[0m`);
  console.log('\n\x1b[2mPress \x1b[1;37mh + Enter\x1b[0m to show help\x1b[0m');
});

// interactive input
process.stdin.on('data', (data) => {
  const key = data.toString().trim();

  if (key === 'h') {
    console.log('\n\x1b[1mAvailable commands:\x1b[0m');
    console.log('press \x1b[1;37mc + enter\x1b[0m → restart the server');
    console.log('press \x1b[1;37mc + enter\x1b[0m → show server url');
    console.log('press \x1b[1;37mc + enter\x1b[0m → open in browser');
    console.log('press \x1b[1;37mc + enter\x1b[0m → clear console');
    console.log('press \x1b[1;37mc + enter\x1b[0m → quit\n');
  }

  if (key === 'q') {
    console.log('\x1b[31mServer stopped\x1b[0m');
    process.exit(0);
  }
});






// [31m red] [32m green] [33m yellow] [34m blue] [35m magenta] [36m cyan] [37m white] [0m reset
// console.log('\x1b[32m%s\x1b[0m', '> Server running on');
// \x1b[32m → فعّل اللون الأخضر
// %s → مكان النص
// 'Server running on' → النص المطبوع
// \x1b[0m → ألغِ اللون بعد الطباعة

