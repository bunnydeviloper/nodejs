const http = require('http');
const fs = require('fs');

// npm install formidable --> a good module for working with file uploads
const formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    const form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      // When file is uploaded and parsed to server, it gets placed on a temp folder on your computer
      // The path to this directory can be found in the "files" object (console.log(files) to see),
      // passed as the third argument in the parse() method's callback function.
      const oldpath = files.filetoupload.path; // temp folder
      const newpath = './newpath/' + files.filetoupload.name;

      // To move the file to the folder of your choice, use the fs module, and rename the file
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });

  } else {
    // create an html upload form
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
