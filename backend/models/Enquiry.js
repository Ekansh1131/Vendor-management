const mongoose = require("mongoose");

const enquirySchema = mongoose.Schema({
    item: {
        name: { type: String, required: true },
        model: { type: String },
        imageUrl: { type: String },
    },
    party: { type: mongoose.Schema.Types.ObjectId, ref: "Party" },
    status: { type: String, enum: ["open", "approved", "closed"], default: "open" },
    createdBy: { type: String, required: true },
    assignedTo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);
