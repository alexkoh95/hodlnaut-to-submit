// ======================================================
//                  Dependencies
// ======================================================
const express = require("express");
const router = express.Router();

// ======================================================
//                  Route
// ======================================================

const userRoute = require("./user");
router.use("/getData", userRoute);

module.exports = router;
