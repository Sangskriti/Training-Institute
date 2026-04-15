let inquiries = [
  { name: "Sulagna Mukherjee", email: "sulagna@example.com", course: "React", message: "Weekend batches?" }
];

exports.getInquiries = (req, res) => {
  res.json(inquiries);
};

exports.saveInquiry = (req, res) => {
  inquiries.push(req.body);
  res.status(201).json({ msg: "Inquiry saved" });
};