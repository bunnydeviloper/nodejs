const http = require('http');
// use URL module to easily split the query string into readable parts
const url = require('url');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  const q = url.parse(req.url, true).query;
  const txt = q.year + " " + q.month;
  res.end(txt);

}).listen(8080);

// the address: http://localhost:8080/                      --> will produce: undefined undefined
// the address: http://localhost:8080/?year=2017&month=July --> will produce: 2017 July
