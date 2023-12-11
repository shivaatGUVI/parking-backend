const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  { versionKey: false }
);

const CustomerModel = mongoose.model("customer", customerSchema);

module.exports = CustomerModel;
