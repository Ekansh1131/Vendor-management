const Enquiry = require("../models/Enquiry");

const addEnquiry = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json(enquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().populate("party");
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(enquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addEnquiry, getEnquiries, updateEnquiry };
