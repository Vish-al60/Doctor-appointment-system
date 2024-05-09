const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    specialization: {
      type: String,
      required: true,
      trim: true  // Ensure no extra whitespace
    },
    experience: {
      type: Number,
      required: true,
      min: 0  // No negative numbers
    },
    fees: {
      type: Number,
      required: true,
      min: 0  // Assuming fees cannot be negative
    },
    doc: {
      type: String,
      required: true,
      trim: true  // Ensure no extra whitespace
     
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,  // Automatically add createdAt and updatedAt timestamps
  }
);

const Doctor = mongoose.model("Doctor", schema);

module.exports = Doctor;
