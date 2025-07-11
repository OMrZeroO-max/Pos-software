const express = require("express");
const router = express.Router();
const User = require("../models/User");

// List users (admin only)
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create user (admin only)
router.post("/", async (req, res) => {
  const { name, email, password, role, permissions } = req.body;
  const user = new User({ name, email, password, role, permissions });
  await user.save();
  res.json(user);
});

// Edit user (admin only)
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

// Delete user (admin only)
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;