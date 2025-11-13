import { Router } from "express";
import multer, { diskStorage } from "multer";
import { extname } from "path";
const router = Router();

import { registerStep1, resendOtp, verifyOtp, saveDetails1, saveDetails2, login, uploadAvatar, getUserByEmail } from "../controllers/authController.js";



// ✅ Multer setup
const storage = diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}${extname(file.originalname)}`)
});
const upload = multer({ storage });

// ✅ Routes
router.post("/register", registerStep1);
router.post("/resend-otp", resendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/details1", saveDetails1);
router.post("/save-details2", saveDetails2);
router.post("/upload-avatar", upload.single("avatar"), uploadAvatar);
router.get("/user/:email", getUserByEmail);
router.get('/test', (req, res) => {
  console.log("✅ /api/auth/test endpoint hit!");
  res.json({ message: "Backend connected successfully 🔥" });
});




export default router;
