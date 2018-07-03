const http = require('http');
const fs = require('fs');
const url = require('url');

const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

const qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

// Create a Node.js file that opens the requested file and returns the content to the client.
// If anything goes wrong, throw a 404 error:
http.createServer(function(req, res) {
  const query = url.parse(req.url, true);
  const filename = `. ${query.pathname}`;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {"Content-type": "text/html"});
      return res.end("404 Not Found!");
    }
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(data);
    return res.end();
  });
}).listen(8080);
