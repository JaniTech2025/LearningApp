import express from "express";

// const http = require('http');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello, Express!'));

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello, Node.js!');
// });

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});