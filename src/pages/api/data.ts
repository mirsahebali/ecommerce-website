require("dotenv").config()
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req:any, res:any) => {
          const { name, email, phone, message } = req.body;

          const transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                              user: process.env.EMAIL,
                              pass: process.env.PASS
                    }
          });
console.log("working?")
res.send("Working?")
          const mailOptions = {
                    from: req.body.email,
                    to: 'mirsahebali204@gmail.com',
                    subject: req.body.message,
                    text: `Name: ${name}\nEmail: ${email}\n Phone: ${phone} \nMessage: ${message}`
          };
          transporter.sendMail(mailOptions, (error:any, info:any) => {
                    if (error) {
                              console.log(error);
                              res.send('error');
                    } else {
                              console.log('Email sent: ' + info.response);
                              res.send('success');
                    }
          });
});



app.listen(3000, () => {
          console.log('Server started on port 3000');
});
