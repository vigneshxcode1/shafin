import { Router } from "express";
import multer, { diskStorage } from "multer";
import { extname } from "path";
const router = Router();
import Portfolio from "../models/Portfolio.js";

// ✅ Multer setup
const storage = diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/portfolio"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}${extname(file.originalname)}`)
});
const upload = multer({ storage });

// ✅ Add Portfolio (with image upload)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { email, projectTitle, projectDescription, skills, tools, projectURL } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });

    const imageUrl = req.file
      ? `http://localhost:5000/uploads/portfolio/${req.file.filename}`
      : null;

    const newPortfolio = await Portfolio.create({
      email,
      projectTitle,
      projectDescription,
      skills: skills.split(",").map((s) => s.trim()),
      tools: tools.split(",").map((t) => t.trim()),
      projectURL,
      imageUrl,
    });

    res.status(201).json(newPortfolio);
  } catch (err) {
    console.error("Portfolio create error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get Portfolios for user
router.get("/user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const portfolios = await Portfolio.find({ email });
    res.status(200).json(portfolios);
  } catch (err) {
    console.error("Fetch portfolios error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Delete Portfolio
router.delete("/:id", async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Portfolio deleted" });
  } catch (err) {
    console.error("Delete portfolio error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
