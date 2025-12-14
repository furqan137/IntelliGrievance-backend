const Complaint = require("../models/Complaint");

// ➕ CREATE COMPLAINT
exports.createComplaint = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    if (!title || !category || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const complaint = await Complaint.create({
      title,
      category,
      description,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Complaint submitted successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit complaint" });
  }
};

// 📥 GET USER COMPLAINTS
exports.getMyComplaints = async (req, res) => {
  const complaints = await Complaint.find({ user: req.user.id }).sort({
    createdAt: -1,
  });
  res.json(complaints);
};
