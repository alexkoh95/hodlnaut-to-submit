const URL = `https://www.bitstamp.net/api/v2/ticker_hour/`;
const fetch = require("node-fetch");

/*
fetchCryptoCurrencyData() is a function that fetches real-time crypto price data. 
It uses the bitstamp API. 
It stores bitcoin and ethereum prices in res.locals.prices
*/

const fetchCryptoCurrencyData = async (req, res, next) => {
  try {
    const bitcoinUSD_URL = URL + "btcusd/";
    const fetchedBitcoinData = await fetch(bitcoinUSD_URL);
    const bitcoinDataToUse = await fetchedBitcoinData.json();
    const bitcoinCurrentPriceUSD = await bitcoinDataToUse.last;

    const ethereumUSD_URL = URL + "ethusd/";
    const fetchedEthereumData = await fetch(ethereumUSD_URL);
    const ethereumDataToUse = await fetchedEthereumData.json();
    const ethereumCurrentPriceUSD = await ethereumDataToUse.last;

    res.locals.prices = {
      bitcoin: bitcoinCurrentPriceUSD,
      ethereum: ethereumCurrentPriceUSD,
    };
    next();
    return;
  } catch (error) {
    console.log("There has been an error fetching Crypto Currency Data", error);
    return `There has been an error fetching Crypto Currency Data:  ${error}`;
  }
};

module.exports = fetchCryptoCurrencyData;

// res.locals --> This is how you want to pass data
