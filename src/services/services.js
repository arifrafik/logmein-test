import { getRandomInt } from "./Utils";

import {
  STOCK_MARKET_SYMBOLS,
  SOCIAL_MEDIA_TYPES
} from "./../components/config";
//nasdaq vs nyse vs dow vs tsx

export const randomDataGenerator = (
  stockSymbol = STOCK_MARKET_SYMBOLS[0].value,
  socialMediaType = SOCIAL_MEDIA_TYPES[0].value,
  dates = getLastTenDaysDate()
) => {
  const data = [];

  for (let index = 0; index < dates.length; index++) {
    const date = dates[index];
    const mediaCount = socialMediaCountGenerator(stockSymbol, socialMediaType);
    const stockMarketPrice = stockPriceGenerator(stockSymbol, dates);
    const recommendation = recommendationAlgorithm(
      stockMarketPrice,
      mediaCount
    );
    const elt = {
      date,
      mediaCount,
      stockMarketPrice,
      socialMediaType,
      stockSymbol,
      recommendation
    };
    data.push(elt);
  }
  return data;
};

export const stockPriceGenerator = (stockSymbol, dates) => {
  const stockPrice = randomValueByStockSymbol(stockSymbol);
  return stockPrice;
};

export const socialMediaCountGenerator = (stockSymbol, socialMediaType) => {
  stockSymbol = stockSymbol.toUpperCase();
  socialMediaType = socialMediaType.toUpperCase();
  if (stockSymbol === "NASDAQ" && socialMediaType == "FACEBOOK") {
    return randomValueBysocialMediaType(socialMediaType) * 2;
  }
  if (stockSymbol === "NYSE" && socialMediaType == "FACEBOOK") {
    return randomValueBysocialMediaType(socialMediaType) * 3;
  }
  return randomValueBysocialMediaType(socialMediaType) * 1.5;
};

export const recommendationAlgorithm = (stockPrice, socialMediaCount) => {
  if (stockPrice % 2 == 0 && socialMediaCount % 2 == 0) {
    return "BUY";
  }
  if (stockPrice.toString().endsWith(9)) {
    return "SELL";
  }
  return "HOLD";
};

//random ints
const randomValueByStockSymbol = stockSymbol => {
  stockSymbol = stockSymbol.toUpperCase();
  switch (stockSymbol) {
    case "NASDAQ":
      return getRandomInt(10, 40);
    case "NYSE":
      return getRandomInt(10, 50);
    case "DOWJNS":
      return getRandomInt(0, 50);
    case "TSX":
      return getRandomInt(5, 45);
    default:
      return getRandomInt(0, 90);
  }
};

const randomValueBysocialMediaType = socialMediaType => {
  socialMediaType = socialMediaType.toUpperCase();
  switch (socialMediaType) {
    case "FACEBOOK":
      // code block
      return getRandomInt(80, 100);
    case "TWITTER":
      // code block
      return getRandomInt(65, 90);
    default:
      return getRandomInt(0, 90);
  }
};
export const getLastTenDaysDate = () => {
  let dates = [];
  var today = new Date();

  for (let index = 0; index < 9; index++) {
    const temp = today.getDate() - index;
    var date = temp + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    dates.push(date);
  }

  return dates;
};
