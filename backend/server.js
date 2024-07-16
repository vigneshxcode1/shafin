import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Products from './routes/productroutes.js';
import userrouter from './routes/AuthRouter.js';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import nodemailer from 'nodemailer'
import orderRoute from './routes/orderRoute.js';
import { fileURLToPath } from 'url'


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads',express.static(path.join(__dirname,'uploads')));


const sendemail = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'vvigneshwaran518@gmail.com',
    pass:"vignesh6123@"
  }
})

//email post
app.post('/sentmail',(req,res)=>{
const {name,address,email,city,country,phone,pin,cartdata}=req.body
const message=`
Order placed successfully! Here are the details:
Name: ${name}
Address: ${address}
City: ${city}
Country: ${country}
Phone: ${phone}
email:${email}
PIN: ${pin}
`
let cartItemsMessage = `\nHello! YOUR BRAND I'd like to proceed with my order. Here are the details:\n`;
  cartdata.forEach((item) => {
  cartItemsMessage += `
Product Name: ${item.name}
Quantity: ${item.quantity}
Price: Rs:${item.price}
Total: Rs${item.quantity * item.price}
Category: ${item.category}
Images: ${item.images[0]}
Description: ${item.describe}
\n`;
});

const mailOptions = {
  from: 'vigneshwaran518@gmail.com',
  to: `${email}`,
  subject: 'New Order Placed',
  text: message + cartItemsMessage,
};

sendemail.sendMail(mailoption,(err,info)=>{
  if(err){
return res.status(500).send(err.toString())
  }
  return res.status(200).sendStatus("email sent :"+info.response)
})
})

// Product API
app.use('/api/v1', Products);

// User API
app.use('/api/v1', userrouter);

// Order API
app.use('/api/v1', orderRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

async function main() {
  await mongoose.connect(process.env.MONGODB, {
    
  });
  console.log("MongoDB connected");
}

main().catch(err => console.log(err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
