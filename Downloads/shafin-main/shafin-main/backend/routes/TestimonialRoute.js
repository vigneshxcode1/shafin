import express from 'express';
import { createtestimonial, deleteTestimonail, getTestimonail } from '../controllers/CreateTestimonial.js';

const route = express.Router();

route.post('/createtestmonial',createtestimonial);
route.get('/getTestimonial',getTestimonail)
route.delete('/deleteTestimonail/:id',deleteTestimonail)

export default route;