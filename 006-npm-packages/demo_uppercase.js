// NPM is a package manager for Node.js packages, or modules (~ JS libraries) if you like.
// The NPM program is installed on your computer when you install Node.js

// npm install upper-case --> downloaded and installed your first package!
// NPM creates a folder named "node_modules", where the package will be placed.
// All packages you install in the future will be placed in this folder.
// Folder structure --> C:\Users\My Name\node_modules\upper-case

const uc = require('upper-case');
const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-type": "text/html"});
  res.write(uc("hello world!")); // this will print 'HELLO WORLD!' on screen
  res.end();
}).listen(8080);


