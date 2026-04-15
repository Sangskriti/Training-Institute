require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/inquiry", inquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));