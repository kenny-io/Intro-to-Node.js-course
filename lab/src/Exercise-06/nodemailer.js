const nodemailer = require('nodemailer');


//set up SMTP transporter 
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail',
      pass: 'yourpassword'
    }
  });
  
  //set up message options
  var mailOptions = {
    from: 'youremail@gmail.com>',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Nodemailer',
    text: 'That was easy!',
    
  };
  
  //deliver message
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });