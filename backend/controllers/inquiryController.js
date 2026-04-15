
const Inquiry = require("../models/Inquiry");


exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ error: "Data fetch failed" });
  }
};


exports.saveInquiry = async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body); // Request body theke data nilo
    await newInquiry.save(); // MongoDB-te save korlo
    res.status(201).json({ msg: "Inquiry saved in MongoDB" });
  } catch (err) {
    res.status(400).json({ error: "Failed to save inquiry" });
  }
};