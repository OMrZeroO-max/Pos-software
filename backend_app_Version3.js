require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const salesRoutes = require("./routes/sales");
const inventoryRoutes = require("./routes/inventory");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/inventory", inventoryRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("MongoDB connected")
);

app.listen(5000, () => console.log("Server running on port 5000"));