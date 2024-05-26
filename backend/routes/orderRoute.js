import express from 'express';
import { createorder, deleteorder, getsingleorder, myorder, orders, updateorder } from '../controllers/orderController.js';
import { authorizeRoles, isauthticateuser } from '../middlewares/Authenticate.js';
const routes = express.Router();

routes.post('/order/new',isauthticateuser,createorder);

routes.get('/order/:id',isauthticateuser,getsingleorder);

routes.get('/myorder',isauthticateuser,myorder);


routes.get('/order',isauthticateuser,authorizeRoles('admin'),orders);

routes.put('/order/:id',isauthticateuser,authorizeRoles('admin'),updateorder);

routes.put('/order/:id',isauthticateuser,authorizeRoles('admin'),updateorder);

routes.delete('/order/:id',isauthticateuser,authorizeRoles('admin'),deleteorder);

export default routes;

