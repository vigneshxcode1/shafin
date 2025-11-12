import express from 'express';
import multer from 'multer';
import { deleteproduct, getproducts, newProduct, singleproduct, updateproduct } from '../controllers/Products.js';
import { isauthticateuser, authorizeRoles } from '../middlewares/Authenticate.js';
import cloudinary from '../utils/Cloudinary.js';
import fs from 'fs';
import { userInfo } from 'os';
import { createClient } from '@supabase/supabase-js';
import { url } from 'inspector';
import { createGallery, getGallery } from '../controllers/Creategallery.js';
import galleryModel from '../model/Gallery.js';
import Product from '../model/Product.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const routes = express.Router();



// Route for creating a new product
routes.post('/products/new', isauthticateuser, authorizeRoles('admin'), async (req, res) => {
  try {
    const { name, price, color, cutprice, stock, category, describe, seller, rating, size, images } = req.body;

    if (!images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ message: 'Images are required and must be an array' });
    }

    
    const product = new Product({
      name,
      price,
      color,
      cutprice,
      stock,
      category,
      describe,
      seller,
      rating,
      size,
      images, 
    });

    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});


routes.get('/products', getproducts);
routes.get('/products/:id', singleproduct);
routes.put('/products/update/:id', isauthticateuser, authorizeRoles('admin'), updateproduct);
routes.put('/products/update/stock/:id', updateproduct);
routes.delete('/products/delete/:id', isauthticateuser, authorizeRoles('admin'), deleteproduct);




//gallery for userInfo

const uploads = multer({ storage: multer.memoryStorage() });


routes.post('/upload', uploads.single('file'), async (req, res, next) => {
  const { file } = req;

  try {
    // Upload the file to Supabase storage
    const { data, error } = await supabase.storage
      .from('gallery_zculture')
      .upload(`gallery/${file.originalname}`, file.buffer, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from('gallery_zculture')
      .getPublicUrl(`gallery/${file.originalname}`);

    const publicUrl = publicUrlData.publicUrl;

    // Save publicUrl and filename to MongoDB
    const newGalleryItem = new galleryModel({
      publicUrl,         // Save the public URL
      filename: file.originalname // Save the original filename
    });

    await newGalleryItem.save(); // Save the document in MongoDB

    // Send a response back to the client
    return res.json({ message: 'File uploaded and saved successfully', url: publicUrl });
    
  } catch (err) {
    console.error("Upload failed:", err);
    return res.status(500).json({ error: 'File upload failed' });
  }
});


routes.get('/gallery',getGallery)

export default routes;
