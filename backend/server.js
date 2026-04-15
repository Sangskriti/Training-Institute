const express = require("express");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/inquiry", inquiryRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));