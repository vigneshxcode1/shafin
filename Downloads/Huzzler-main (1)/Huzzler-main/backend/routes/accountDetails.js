
// import express from "express";
// import {
//   createUser,
//   getUsers,
//   getUserById,
//   updateUser,
//   deleteUser
// } from "../controllers/accountDetails.js";

// const router = express.Router();

// router.post("/", createUser);       // ➕ Add
// router.get("/", getUsers);          // 📋 Get all
// router.get("/:id", getUserById);    // 🔍 Get one
// router.put("/:id", updateUser);     // ✏️ Update
// router.delete("/:id", deleteUser);  // ❌ Delete

// export default router;


import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/accountDetails.js";

const router = express.Router();

router.post("/createaccount", createUser);
router.get("/getuser", getUsers);
router.get("/getuserbyid/:id", getUserById);
router.put("/updateuseraccount/:id", updateUser);
router.delete("/deleteaccount/:id", deleteUser);

export default router;
