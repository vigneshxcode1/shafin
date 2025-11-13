// import send from '@sendgrid/mail';
// import setApiKey from '@sendgrid/mail';

// setApiKey(process.env.SENDGRID_API_KEY);

// const sendOTPEmail = async (to, code) => {
//   const msg = {
//     to,
//     from: process.env.FROM_EMAIL,
//     subject: 'Your Zuntraa OTP',
//     text: `Your Zuntraa verification code is: ${code}`,
//     html: `<p>Your Zuntraa verification code is: <strong>${code}</strong></p>`
//   };
//   await send(msg);
// }

// export default sendOTPEmail;


// // backend/Uintils/sendEmail.js
// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendOTPEmail = async (to, code) => {
//   const msg = {
//     to,
//     from: process.env.FROM_EMAIL, // must be a verified sender in SendGrid
//     subject: "Your Zuntraa OTP",
//     text: `Your Zuntraa verification code is: ${code}`,
//     html: `<p>Your Zuntraa verification code is: <strong>${code}</strong></p>`,
//   };

//   try {
//     await sgMail.send(msg);
//     console.log(`✅ OTP email sent to ${to}`);
//   } catch (error) {
//     console.error("❌ Error sending OTP email:", error);

//     // Helpful details from SendGrid
//     if (error.response) {
//       console.error(error.response.body);
//     }

//     throw new Error("Failed to send OTP email");
//   }
// };

// export default sendOTPEmail;


// // backend/utils/sendEmail.js

// import sgMail from "@sendgrid/mail";
// import dotenv from "dotenv";

// dotenv.config(); // ✅ Load environment variables

// // ✅ Set API key from .env
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// /**
//  * Send OTP email using SendGrid
//  * @param {string} to - Recipient email address
//  * @param {string} code - OTP code to send
//  */
// const sendOTPEmail = async (to, code) => {
//   const msg = {
//     to, // recipient
//     from: process.env.FROM_EMAIL, // ✅ must be verified sender in SendGrid
//     subject: "Your Zuntraa Verification Code",
//     text: `Your Zuntraa verification code is: ${code}`,
//     html: `
//       <div style="font-family: Arial, sans-serif; line-height: 1.5;">
//         <h2 style="color: #4CAF50;">Zuntraa Verification</h2>
//         <p>Your verification code is:</p>
//         <h1 style="background: #f4f4f4; padding: 10px; display: inline-block; border-radius: 5px;">
//           ${code}
//         </h1>
//         <p>This code will expire in 10 minutes.</p>
//         <br/>
//         <p style="color: #888; font-size: 12px;">If you didn’t request this, you can ignore this email.</p>
//       </div>
//     `,
//   };

//   try {
//     await sgMail.send(msg);
//     console.log(`✅ OTP email sent to ${to}`);
//   } catch (error) {
//     console.error("❌ Error sending OTP email:", error);

//     // Optional: print more details from SendGrid response
//     if (error.response) {
//       console.error("🔍 SendGrid response:", error.response.body);
//     }

//     // Throw for controller to handle
//     throw new Error("Failed to send OTP email");
//   }
// };

// export default sendOTPEmail;


import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // use App Password, not your real Gmail password
  },
});

export default async function sendOTPEmail(to, code) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: "Your Huzzler OTP Code",
    html: `<p>Your OTP is <b>${code}</b></p>`,
  };

  await transporter.sendMail(mailOptions);
  console.log(`✅ OTP email sent via Gmail to ${to}`);
}
