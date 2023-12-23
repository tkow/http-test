const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('OK\n');
});

const PORT = process.env.PORT || 8080;
const ADDRESS = process.env.ADDRESS || "0.0.0.0";

process.on('SIGINT', () => {
  console.log('Received SIGINT. Closing server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

server.listen(PORT, ADDRESS, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
