const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    adharNumber: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: String,
      required:true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
      min: 10,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
