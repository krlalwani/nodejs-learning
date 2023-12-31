const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    rating: { type: Number, default: 4.5 },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Tour = mongoose.model("tours", tourSchema);

module.exports = Tour;
