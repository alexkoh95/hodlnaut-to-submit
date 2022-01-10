const express = require("express");
const router = express.Router();

const fetchCryptoCurrencyData = require("../middleware/fetch-cryptocurrency-data");
const calculateAccountValue = require("../services/currency-service");
const testData = require("../models/test-data");

/*
This is a GET route. Based on the ID passed into req.params (e.g. 1, 2, 999) it will filter the seed data (test-data). 
It uses the middleware fetchCryptoCurrencyData() to fetch real-time crypto prices. 
It displays the user's ID (user_ID), holdings (BTC, ETH), and calculates the account holdings
 */

router.get("/:id", fetchCryptoCurrencyData, async (req, res) => {
  try {
    const keys = Object.keys(testData);
    for (key of keys) {
      if (req.params.id === key) {
        const userID = req.params.id;
        const data = await testData;
        const filteredData = data[userID];
        const totalAccountValueInUSD = calculateAccountValue(res, filteredData);
        const returnedData = { ...filteredData, totalAccountValueInUSD };
        res.json(returnedData);
      }
    }
  } catch (error) {
    console.log(`There has been an error in fetching data, ${error}`);
    res.status(404).json("There has been an error");
  }
});

module.exports = router;
