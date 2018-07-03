const http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // req arg: represents the request from the client, as an object (http.IncomingMessage object).
  // This object has a property called "url" which holds the part of the url that comes after the domain name:
  res.write(req.url);

  res.end();
}).listen(8080);

// if you go to: http://localhost:8080/summer --> you will see: /summer
// if you go to: http://localhost:8080/winter --> you will see: /winter

