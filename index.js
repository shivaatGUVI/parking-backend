const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const application = express();

application.use(cors());
application.use(express.json());

application.get("/", (req, res) => {
  res.status(200).send("Home route");
});

application.listen(process.env.PORT, async () => {
  try {
    console.log("Server started");
    await connection;
    console.log("MongoDB connected");
  } catch (err) {
    console.log({ err: err.message });
  }
});