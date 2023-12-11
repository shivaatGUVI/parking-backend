const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  { versionKey: false }
);

const ClientModel = mongoose.model("client", clientSchema);

module.exports = ClientModel;
