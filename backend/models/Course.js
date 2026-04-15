const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fees: String,
  duration: String,
  description: String
});

module.exports = mongoose.model("Course", courseSchema);