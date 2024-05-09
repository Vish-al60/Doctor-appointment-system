const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use any SMTP service
  auth: {
    user: "vish.chouhan058@gmail.com", // Your email
    pass: "mzob dpgy ytsy mjks", // Your email password
  },
});
//email send krne ka code
app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: "vish.chouhan058@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});
