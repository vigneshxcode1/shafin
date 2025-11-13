import express from 'express';
import { createWork, deleteWork, getAllWorks, getWorkById, updateWork } from '../controllers/WorksController.js';

const WorkRouter = express.Router();

WorkRouter.post('/createWork', createWork)

WorkRouter.get("/getWork",getAllWorks);

WorkRouter.get("/getSingleWork/:id",getWorkById)

WorkRouter.put("/updateWorkById/:id",updateWork);

WorkRouter.delete("/deleteWorkby/:id",deleteWork);


export default WorkRouter;