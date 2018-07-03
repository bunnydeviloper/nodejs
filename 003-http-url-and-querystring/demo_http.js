const http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // HTTP header helps display a HTML string in the body, if don't include, it displays in a pre tag
  // The first argument of the res.writeHead() method is the status code, 200 means that all is OK
  // The second argument is an object containing the response headers.

  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
