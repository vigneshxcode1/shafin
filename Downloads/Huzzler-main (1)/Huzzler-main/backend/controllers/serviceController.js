const Service = require("../models/Service");

// ➕ Create new service
exports.addService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    console.error("Add Service error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// 📄 Get all services for a user
exports.getUserServices = async (req, res) => {
  try {
    const { email } = req.params;
    const services = await Service.find({ userEmail: email });
    res.json(services);
  } catch (err) {
    console.error("Fetch Services error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
