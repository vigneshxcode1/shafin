
import Work from '../models/Works.js'

export const createWork = async (req, res) => {

  try {
    const work = new Work(req.body);
    await work.save();

    res.status(200).json({ message: "Work created successfully", work });
  } catch (error) {
    console.error("Error creating work:", error);
    res.status(500).json(
      {
       message: "Server error", 
       error: error.message
       });
  }
};


export const getAllWorks = async (req, res) => {
  try {
    const works = await Work.find();
    res.status(200).json({work:works});
  } catch (error) {
    console.error("Error fetching works:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getWorkById = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) return res.status(404).json({ message: "Work not found" });
    res.status(200).json(work);
  } catch (error) {
    console.error("Error fetching work:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, {
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
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) return res.status(404).json({ message: "Work not found" });
    res.status(200).json({ message: "Work deleted successfully" });
  } catch (error) {
    console.error("Error deleting work:", error);
    res.status(500).json({ message: "Server error" });
  }
};
