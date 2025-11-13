import JobProfileModel from "../models/JobProposal.js";

export const createJobProposal = async (req, res) => {

  try {
    const JobProposal = new JobProfileModel(req.body);
    await JobProposal.save();

    res.status(200).json({ message: "job proposal created successfully", JobProposal });
  } catch (error) {
    console.error("Error creating JobProposal:", error);
    res.status(500).json(
      {
       message: "Server error", 
       error: error.message
       });
  }
};


export const getAllJobProposal = async (req, res) => {
  try {
    const JobProposal = await JobProfileModel.find();
    res.status(200).json({JobProposal:JobProposal});
  } catch (error) {
    console.error("Error fetching JobProposals:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const  getJobProposalbyid= async (req, res) => {
  try {
    const JobProposal = await JobProfileModel.findById(req.params.id);
    if (!JobProposal) return res.status(404).json({ message: "JobProposal not found" });
    res.status(200).json(JobProposal);
  } catch (error) {
    console.error("Error fetching JobProposal:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateJobProposal = async (req, res) => {
  try {
    const JobProposal = await JobProfileModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!JobProposal) return res.status(404).json({ message: "JobProposal not found" });
    res.status(200).json({ message: "JobProposal updated successfully", JobProposal });
  } catch (error) {
    console.error("Error updating JobProposal:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const deleteJobProposal = async (req, res) => {
  try {
    const JobProposal = await JobProfileModel.findByIdAndDelete(req.params.id);
    if (!JobProposal) return res.status(404).json({job:JobProposal, message: "JobProposal not found" });
    res.status(200).json({ message: "JobProposal deleted successfully" });
  } catch (error) {
    console.error("Error deleting JobProposal:", error);
    res.status(500).json({ message: "Server error" });
  }
};
