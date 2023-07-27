// 5- Creating Server
const http = require('http');

const server = http.createServer(function (req, res) {
  res.write('<h1>Introducion to Node Js</h1>');
  res.end();
});

server.listen(5000, (err) => {
  err ? console.log(err) : console.log('The Server is Running on port 5000');
});