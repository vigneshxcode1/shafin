import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log("✅ Key loaded:", !!process.env.SENDGRID_API_KEY);
console.log("✅ From email:", process.env.FROM_EMAIL);

const msg = {
  to: "yourpersonalemail@gmail.com", // use your real email
  from: process.env.FROM_EMAIL,
  subject: "SendGrid Test from Huzzler",
  text: "If you got this, SendGrid is working ✅",
};

sgMail
  .send(msg)
  .then(() => console.log("✅ Test email sent successfully!"))
  .catch((err) => {
    console.error("❌ Failed:", err.response?.body || err.message);
  });
