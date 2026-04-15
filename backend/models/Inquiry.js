const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true }, // User kon course-er jonno inquire korche
  message: { type: String },
  createdAt: { type: Date, default: Date.now } // Inquire korar somoy-ta save thakbe
});

module.exports = mongoose.model("Inquiry", inquirySchema);