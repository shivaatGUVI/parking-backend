const mongoose = require("mongoose");

const floorSchema = mongoose.Schema(
  {
    space: String,
  },
  { versionKey: false }
);

const FloorModel = mongoose.model("floor", floorSchema);

module.exports = FloorModel;
