const http = require('http');
const ip = require('ip');
const hostname = '*';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n I am ' +  ip.address());
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
