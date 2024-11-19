const mongoose = require("mongoose");

const partySchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["end user", "reseller"], required: true },
    contactInfo: {
        email: { type: String },
        phone: { type: String },
        address: { type: String },
    },
    brands: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model("Party", partySchema);
