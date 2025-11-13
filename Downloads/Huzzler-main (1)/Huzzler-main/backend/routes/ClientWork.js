import express from 'express';
import { createClientWork, deleteWork, getAllClientWorks, getClientWorkById, updateClientWork } from '../controllers/Clientwork.js';


const ClientRouter = express.Router();

ClientRouter.post("/clientworkCreate",createClientWork);

ClientRouter.get("/Clientworkget",getAllClientWorks);

ClientRouter.get("/ClientgetWorkbyId/:id",getClientWorkById);

ClientRouter.put("/ClientupdateWorkbyId/:id",updateClientWork)

ClientRouter.delete("/ClientWorkDelete/:id",deleteWork)


export default ClientRouter;