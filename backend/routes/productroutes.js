import express from 'express';
import multer from 'multer';
import { deleteproduct, getproducts,newProduct,singleproduct, updateproduct } from '../controllers/Products.js';
import { isauthticateuser, authorizeRoles } from '../middlewares/Authenticate.js';

const routes = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

routes.post('/products/new', isauthticateuser, authorizeRoles('admin'), upload.array('images', 2),newProduct);
routes.get('/products', getproducts);
routes.get('/products/:id', singleproduct);
routes.put('/products/update/:id', isauthticateuser, authorizeRoles('admin'), updateproduct);
routes.put('/products/update/stock/:id', updateproduct);
routes.delete('/products/delete/:id', isauthticateuser, authorizeRoles('admin'), deleteproduct);

export default routes;
