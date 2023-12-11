const mongoose = require("mongoose");
const typeOfSpot = "Bike" | "Bicycle" | "Car";

const spotSchema = mongoose.Schema(
  {
    space: String,
    floor: String,
    type: typeOfSpot,
  },
  { versionKey: false }
);

const SpotModel = mongoose.model("spot", spotSchema);

module.exports = SpotModel;
