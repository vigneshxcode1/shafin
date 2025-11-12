import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",

  auth: {
    user:"vvigneshwaran518@gmail.com",
    pass:"bkga xpnx imty enfm",
  },
});

async function sendMail() {
let message="hello"
let cartItemsMessage="items"
  try {
    const info = await transporter.sendMail({
      from:'vvigneshwaran518@gmail.com',
      to:"vvigneshwaran518@gmail.com", // recipient address
      subject: "Order Confirmation", // Subject line
      text: message, // plain text body
      html: `<p>${message.replace(/\n/g, '<br>')}</p><p>${cartItemsMessage.replace(/\n/g, '<br>')}</p>`, 
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}
sendMail()

export default sendMail;
