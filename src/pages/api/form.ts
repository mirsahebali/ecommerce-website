// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config()
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');
export {}
type Data = {
  name: string;
  email: string;
  phone: number;
  message: string;
};



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  if (req.method === "POST") {
    const { fullname, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });
    console.log("working?")
    const mailOptions = {
      from: req.body.email,
      to: 'assignment@spreadinindia.in',
      subject: req.body.message,
      text: `Name: ${fullname}\nEmail: ${email}\n Phone: ${phone} \nMessage: ${message}`
    };
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send(info.response);
      }
    });



  } else {
    res
      .status(200)
      .json({ name: "Mir", email: "d", phone: 88, message: "hello" });
  }
}
