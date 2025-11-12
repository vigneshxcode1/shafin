import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Products from './routes/productroutes.js';
import userrouter from './routes/AuthRouter.js';
import testimonialroute from './routes/TestimonialRoute.js';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from 'multer'
import orderRoute from './routes/orderRoute.js';
import { fileURLToPath } from 'url';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
;
const upload = multer();
app.use(upload.none()); // Parse form-data requests

// Product API
app.use('/api/v1', Products);

// User API
app.use('/api/v1', userrouter);

// Order API
app.use('/api/v1', orderRoute);

//testimonial 
app.use('/api/v1', testimonialroute)


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

main().catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
