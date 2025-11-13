import ClientworkModel from "../models/ClientWork.js";

export const createClientWork = async (req, res) => {

  try {
    const work = new ClientworkModel(req.body);
    await work.save();

    res.status(200).json({ message: "client Work created successfully", work });
  } catch (error) {
    console.error("Error creating work:", error);
    res.status(500).json(
      {
       message: "Server error", 
       error: error.message
       });
  }
};


export const getAllClientWorks = async (req, res) => {
  try {
    const works = await ClientworkModel.find();
    res.status(200).json({work:works});
  } catch (error) {
    console.error("Error fetching works:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getClientWorkById = async (req, res) => {
  try {
    const work = await ClientworkModel.findById(req.params.id);
    if (!work) return res.status(404).json({ message: "Work not found" });
    res.status(200).json(work);
  } catch (error) {
    console.error("Error fetching work:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateClientWork = async (req, res) => {
  try {
    const work = await ClientworkModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!work) return res.status(404).json({ message: "Work not found" });
    res.status(200).json({ message: "Work updated successfully", work });
  } catch (error) {
    console.error("Error updating work:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const deleteWork = async (req, res) => {
  try {
    const work = await ClientworkModel.findByIdAndDelete(req.params.id);
    if (!work) return res.status(404).json({ message: "Work not found" });
    res.status(200).json({ message: "Work deleted successfully" });
  } catch (error) {
    console.error("Error deleting work:", error);
    res.status(500).json({ message: "Server error" });
  }
};
