

import { Router } from "express";
const router = Router();
import Service from "../models/Service.js";

// ✅ Create new service
router.post("/", async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    console.error("Create service error:", err);
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get all services by user email
router.get("/:email", async (req, res) => {
  try {
    const services = await Service.find({ userEmail: req.params.email });
    res.json(services);
  } catch (err) {
    console.error("Get user services error:", err);
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get single service by ID
router.get("/id/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.json(service);
  } catch (err) {
    console.error("Get service by ID error:", err);
    res.status(500).json({ message: err.message });
  }
});

// ✅ Update service by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedService);
  } catch (err) {
    console.error("Update service error:", err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
