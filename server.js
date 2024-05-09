const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");
//const EmailRouter = require("./routes/EmailRouter");
//const multer = require("multer");

const app = express();
const port = process.env.PORT || 5000;

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
// app.use(bodyParser.json()); ////////
//   nya code hai yaha se  line 1

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use any SMTP service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass:process.env.EMAIL_PASSWORD , // Your email password
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



app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
