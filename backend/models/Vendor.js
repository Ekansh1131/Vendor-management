const mongoose = require("mongoose");
const vendorSchema = mongoose.Schema({
    name: { type: String, required: true },
    gstin: { type: String, unique: true },
    contactDetails: {
      email: { type: String },
      phone: [{ type: String }],
      address: { type: String },
    },
    contactHistory: [
      {
        date: { type: Date, default: Date.now },
        notes: { type: String },
      },
    ],
    itemsOffered: [
      {
        itemName: { type: String },
        model: { type: String },
        price: { type: Number },
        availability: { type: Boolean },
      },
    ],
    status: { type: String, enum: ["temporary", "permanent"], default: "temporary" },
  }, { timestamps: true });
  