import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const body = JSON.parse(event.body as string) || event.body;
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: "send.one.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER_RECEIVER,
    subject: `Contact form submission from ${name} (${email})`,
    text: message,
  };

  try {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending email:", error);
        return {
          statusCode: 500,
          body: "Failed to send email",
        };
      }
    });

    //Sleep for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      statusCode: 200,
      body: "Email sent successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: "Failed to send email",
    };
  }
};
