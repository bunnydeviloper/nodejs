const http = require('http');

// The Node.js file system module allow you to work with the file system on your computer.
const fs = require('fs');

// Create a Node.js file that reads the HTML demofile1.html file, and return the content:
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

/* -- CREATE FILES -- */
// fs.appendFile() method appends specified content to a file. It creates the file if does not exist
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved with fs.appendFile()!');
});

// fs.open() method takes a "flag" as the second argument
// if the flag is "w" for "writing", the specified file is opened for writing.
// If the file does not exist, an empty file is created:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved with fs.open()!');
});

// fs.writeFile() method replaces the specified file and content if it exists.
// If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved with fs.writeFile()!');
});

/* -- UPDATE FILES -- */
// The fs.appendFile() method appends the specified content at the end of the specified file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated, append "This is my text." to the end of mynewfile1.txt!');
});

// The fs.writeFile() method replaces the specified file and content:
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced content of mynewfile3.txt!');
});

/* -- DELETE FILES -- */
// To delete a file with the File System module, use the fs.unlink() method.
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted! fs.unlink() deleted mynewfile2.txt.');
});

/* -- RENAME FILES -- */
// To rename a file with the File System module,  use the fs.rename() method.
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed from mynewfile1.txt to myrenamedfile.txt!');
});

