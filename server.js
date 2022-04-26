// external imports
const express = require("express");
require("dotenv").config();

// initialization
const app = express();
const port = process.env.PORT || 5000;

// server running
app.listen(port, () => {
  console.log("Passport server running on port", port);
});
