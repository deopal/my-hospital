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
      min: 5,
      max: 100,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    pinCode: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
    },
    WebGL2RenderingContext: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
