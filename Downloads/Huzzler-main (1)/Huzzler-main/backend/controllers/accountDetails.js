

// import User from "../models/AccountDetails.js";

// // ➕ Create new user (Add Account)
// export const createUser = async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).json({ message: "Account created successfully", user });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // 📋 Get all users
// export const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // 🔍 Get single user by ID
// export const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // ✏️ Update user by ID
// export const updateUser = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updatedUser) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "Account updated successfully", updatedUser });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // ❌ Delete user by ID
// export const deleteUser = async (req, res) => {
//   try {
//     const deleted = await User.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "Account deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import User from "../models/User.js";
import bcrypt from "bcryptjs";

// ➕ Create user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
    });

    res.status(201).json({ message: "Account created successfully", user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📋 Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get one user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Account updated successfully", updatedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete user
export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
