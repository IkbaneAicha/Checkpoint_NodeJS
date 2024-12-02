const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'xx.xx@gmail.com',  
    pass: '*****'     
  }
});

let mailOptions = {
  from: 'xx.xx@gmail.com',   
  to: 'yy.yy@gmail.com', 
  subject: 'Test Email',           
  text: 'Hello from Node.js!'      
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error: ' + err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
