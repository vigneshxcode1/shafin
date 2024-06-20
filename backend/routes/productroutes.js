import express from 'express';
import multer from 'multer';
import { deleteproduct, getproducts, newProduct, singleproduct, updateproduct } from '../controllers/Products.js';
import { isauthticateuser, authorizeRoles } from '../middlewares/Authenticate.js';
import cloudinary from '../utils/Cloudinary.js';
import fs from 'fs';

const routes = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Cloudinary uploader function
const uploadToCloudinary = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path);
    fs.unlinkSync(path);
    return result.secure_url; 
    
  } catch (error) {
    console.error('Error uploading to Cloudinary', error);
    throw error;
  }
};

// Route for creating a new product
routes.post('/products/new', isauthticateuser, authorizeRoles('admin'), upload.array('images', 5), async (req, res, next) => {
  try {
    const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.path));
    const imageUrls = await Promise.all(imageUploadPromises);

    req.body.images = imageUrls;
    next(); 
  } catch (error) {
    res.status(500).json({ message: 'Error uploading images', error });
  }
}, newProduct);

routes.get('/products', getproducts);
routes.get('/products/:id', singleproduct);
routes.put('/products/update/:id', isauthticateuser, authorizeRoles('admin'), updateproduct);
routes.put('/products/update/stock/:id', updateproduct);
routes.delete('/products/delete/:id', isauthticateuser, authorizeRoles('admin'), deleteproduct);

export default routes;
