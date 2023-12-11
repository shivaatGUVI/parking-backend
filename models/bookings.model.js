const mongoose = require("mongoose");
const typeOfBooking = null | String;

const bookingSchema = mongoose.Schema(
  {
    owner: typeOfBooking,
    space: typeOfBooking,
    floor: typeOfBooking,
  },
  { versionKey: false }
);

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = BookingModel;
