// ======================================================
//                  Dependencies
// ======================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

// ======================================================
//                      Routes
// ======================================================
const getData = require("./routes/router.js");
app.use(getData);

// ======================================================
//                  Listener
// ======================================================
app.listen(PORT, () => {
  console.log(`App is running and listening on ${PORT}`);
  return `App is running and listening on ${PORT}`;
});

module.exports = app;
