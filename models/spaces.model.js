const mongoose = require("mongoose");

const spaceSchema = mongoose.Schema(
  {
    owner: String,
    spaceName: String,
    floors: Number,
    createdOn: String,
  },
  { versionKey: false }
);

const SpaceModel = mongoose.model("space", spaceSchema);

module.exports = SpaceModel;
