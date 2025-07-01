const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to Home Page');
  } else if (req.url === '/api') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ name: 'Node', version: '20.x' }));
  } else {
    res.statusCode = 404;
    res.write('Page not found');
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});