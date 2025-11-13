import express from 'express';
import { createJobProposal, deleteJobProposal, getAllJobProposal, getJobProposalbyid, updateJobProposal } from '../controllers/Jobproposal.js';

const JobProfileRouter = express.Router();

JobProfileRouter.post("/createJobProposal",createJobProposal);
JobProfileRouter.get("/getAllJobProposal",getAllJobProposal);
JobProfileRouter.get("/getJobProposalbyid/:id",getJobProposalbyid);
JobProfileRouter.put("/UpdateJobProposal/:id",updateJobProposal);
JobProfileRouter.delete("/deleteJobProposal/:id",deleteJobProposal)


export default JobProfileRouter;