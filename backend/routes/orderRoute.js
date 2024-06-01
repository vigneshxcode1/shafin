import express from 'express';
import { createorder, getsingleorder, myorder } from '../controllers/orderController.js'; // Adjusted import statement
const routes = express.Router();

routes.post('/order/new', createorder);

routes.get('/order/:id', getsingleorder);
routes.get('/myorder', myorder);

export default routes;
