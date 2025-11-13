import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import sendOTPEmail from "../utils/sendEmail.js";

const salt = bcrypt.genSaltSync(10);

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}


// export async function registerStep1(req, res) {
//   try {
//     const { firstName, lastName, email, password, role, avatarUrl } = req.body;

//     // 🔍 Check if already registered
//     const existing = await User.findOne({ email });
//     if (existing)
//       return res.status(400).json({ message: "Email already registered" });

//     // 🔐 Hash password
//     const hashedPassword = bcrypt.hashSync(password, salt);
//     const otpCode = generateOTP();

//     // 🧠 Create new user
//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//       role,
//       avatarUrl,
//       otp: { code: otpCode, expiresAt: new Date(Date.now() + 10 * 60 * 1000) }, // 10 mins
//     });

//     await sendOTPEmail(email, otpCode);
//     res.status(200).json({ message: "OTP sent successfully", userId: user._id });
//   } catch (err) {
//     console.error("Register error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// }

// ================================
// 1️⃣ REGISTER STEP 1
// ================================
export async function registerStep1(req, res) {
  try {
    const { firstName, lastName, email, password, role, avatarUrl } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    // ✅ Secure hash
    const hashedPassword = await bcrypt.hash(password, 10);

    const otpCode = generateOTP();

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      avatarUrl,
      otp: {
        code: otpCode,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      },
    });

    await sendOTPEmail(email, otpCode);
    res.status(200).json({ message: "OTP sent successfully", userId: user._id });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

// ================================
// 6️⃣ LOGIN
// ================================
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    if (!user.password)
      return res.status(400).json({
        message: "This account was created using Google. Please login with Google.",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      token,
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        avatarUrl: user.avatarUrl,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
}


/* ================================
   2️⃣ RESEND OTP
================================ */
export async function resendOtp(req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otpCode = generateOTP();
    user.otp = {
      code: otpCode,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    };
    await user.save();

    await sendOTPEmail(email, otpCode);
    res.status(200).json({ message: "OTP resent successfully" });
  } catch (err) {
    console.error("Resend OTP error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

/* ================================
   3️⃣ VERIFY OTP
================================ */
export async function verifyOtp(req, res) {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({ email });
    if (!user || !user.otp)
      return res.status(400).json({ message: "Invalid or expired OTP" });

    if (user.otp.code !== code)
      return res.status(400).json({ message: "Incorrect OTP" });

    if (user.otp.expiresAt < new Date())
      return res.status(400).json({ message: "OTP expired" });

    user.otp = undefined;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (err) {
    console.error("Verify OTP error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

/* ================================
   4️⃣ SAVE DETAILS 1
================================ */
export async function saveDetails1(req, res) {
  try {
    const { email, expertise, howHeard, location } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.details1 = { expertise, howHeard, location };
    await user.save();

    res.status(200).json({ message: "Details1 saved successfully" });
  } catch (err) {
    console.error("Save Details1 error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

/* ================================
   5️⃣ SAVE DETAILS 2 (BuildProfile)
================================ */
export async function saveDetails2(req, res) {
  try {
    const { email, professionalTitle, experienceLevel, currentStatus, about, skills, tools } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.details2 = {
      professionalTitle,
      experienceLevel,
      currentStatus,
      about,
      skills,
      tools,
    };

    await user.save();

    res.status(200).json({
      message: "✅ Details2 saved successfully!",
      user,
    });
  } catch (err) {
    console.error("Save Details2 error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

/* ================================
   6️⃣ LOGIN
================================ */
// export async function login(req, res) {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid email or password" });

//     // If account was created with Google
//     if (!user.password)
//       return res.status(400).json({
//         message: "This account was created using Google. Please login with Google.",
//       });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid email or password" });

//     // Generate JWT
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.status(200).json({
//       token,
//       user: {
//         email: user.email,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         role: user.role,
//         avatarUrl: user.avatarUrl,
//         details1: user.details1,
//         details2: user.details2,
//       },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// }

/* ================================
   7️⃣ UPLOAD AVATAR
================================ */
export async function uploadAvatar(req, res) {
  try {
    const { email } = req.body;
    if (!req.file)
      return res.status(400).json({ message: "No file uploaded" });

    const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    const user = await User.findOneAndUpdate(
      { email },
      { avatarUrl: fileUrl },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ url: fileUrl, message: "Avatar updated", user });
  } catch (err) {
    console.error("Upload Avatar Error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

/* ================================
   8️⃣ FETCH USER BY EMAIL
================================ */
export async function getUserByEmail(req, res) {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

/* ================================
   9️⃣ LINK GOOGLE & NORMAL ACCOUNT
================================ */
export async function linkAccounts(req, res) {
  try {
    const { existingEmail, password, googleEmail, googleId } = req.body;
    const user = await User.findOne({ email: existingEmail });
    if (!user) return res.status(404).json({ message: "Existing account not found" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Wrong password" });

    // Link googleId and update avatar
    user.googleId = googleId;
    const googleUser = await User.findOne({ email: googleEmail });
    if (googleUser?.avatarUrl) user.avatarUrl = googleUser.avatarUrl;

    await user.save();
    return res.status(200).json({ message: "Accounts linked successfully", user });
  } catch (err) {
    console.error("Link accounts error:", err);
    res.status(500).json({ message: "Server error" });
  }
}
