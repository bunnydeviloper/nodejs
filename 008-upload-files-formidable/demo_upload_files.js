// npm install formidable --> a good module for working with file uploads
const formidable = require('formidable');
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });

    // When file is uploaded and parsed to server, it gets placed on a temp folder on your computer

    The path to this directory can be found in the "files" object, passed as the third argument in the parse() method's callback function.

To move the file to the folder of your choice, use the File System module, and rename the file

      const oldpath = files.filetoupload.path;
      const newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });

  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // create an html upload form
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');

    return res.end();
  }
}).listen(8080);
