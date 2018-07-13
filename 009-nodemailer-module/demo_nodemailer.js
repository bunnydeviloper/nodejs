// The Nodemailer module makes it easy to send emails from your computer.
// npm install nodemailer
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

/*
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'smiley.mammoth@gmail.com', // 'youremail@gmail.com',
    pass: 'ohioplayground', // 'yourpassword',
  }
});
*/

// setup e-mail data with unicode symbols
const mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔, sending email using Node.js', // Subject line
    text: 'Hello world ? That was easy!', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Email message sent: ' + info.response);
});

