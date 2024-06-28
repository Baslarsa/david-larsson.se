const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Missing required fields");
  }
  const transporter = nodemailer.createTransport({
    host: "send.one.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true, // Enable logging to debug
    debug: true, // Enable debug mode
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000, // 30 seconds
    socketTimeout: 60000, // 60 seconds
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER_RECEIVER,
    subject: `Contact form submission from ${name} (${email})`,
    text: message,
  };

  const timeout = setTimeout(() => {
    return res.status(500).send("Request timed out");
  }, 70000); // Timeout after 70 seconds

  try {
    await transporter.sendMail(mailOptions);
    clearTimeout(timeout); // Clear the timeout on success
    return res.status(200).send("Email sent successfully");
  } catch (error) {
    clearTimeout(timeout); // Clear the timeout on error
    console.error("Error sending email:", error);
    return res.status(500).send("Failed to send email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
