// modules are the same as JS libraries (a set of fn(s) you want to include in your application)
// built-in modules (no installation needed) and external modules
const http = require('http');

// create a server, when user access via http://localhost:8080/, they get back 'Hello World!'
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
