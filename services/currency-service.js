/*
calculateAccountValue() takes in two arguments, (res, filteredData) 
res refers to the response object in Express’s req-res cycle. 
I have stored the crypto ticker data within the res object as res.locals.prices (refer to fetch-crypto-currency.js). 
filteredData refers to the seed data that has been filtered based on user_id. 
The function returns two possible values:
1. The account’s total value in USD 
2. The string: “This account has no Bitcoin and Ethereum holdings”. 
 */

function calculateAccountValue(res, filteredData) {
  const bitcoinInUSD = parseFloat(
    res.locals.prices.bitcoin * filteredData.holdings.BTC
  );
  const ethereumInUSD = parseFloat(
    res.locals.prices.ethereum * filteredData.holdings.ETH
  );

  if (!isNaN(bitcoinInUSD) && !isNaN(ethereumInUSD)) {
    return bitcoinInUSD + ethereumInUSD;
  } else if (isNaN(bitcoinInUSD)) {
    return ethereumInUSD;
  } else if (isNaN(ethereumInUSD)) {
    return bitcoinInUSD;
  } else if (isNaN(ethereumInUSD) && isNaN(bitcoinInUSD)) {
    return "This account has no Bitcoin and Ethereum holdings";
  }
}

module.exports = calculateAccountValue;
