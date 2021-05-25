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
  /*
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
