const tickerText = document.getElementById("ticker-text");
const tickerValue = document.getElementById("ticker-value");
const tickerSymbol = document.getElementById("ticker-symbol");
const gaugeNeedles = document.getElementById("gauge-needle");
var sellCounter = document.getElementById("sellCounter");
var buyCounter = document.getElementById("buyCounter");
var holdCounter = document.getElementById("holdCounter");
// var strongSellCounter = document.getElementById("strongSellCounter");
// var strongBuyCounter = document.getElementById("strongBuyCounter");

// Simulated data array (replace with your actual data source)
const datas = [
  { symbol: "TSLA", value: "HOLD" },
  { symbol: "AAPL", value: "STRONG BUY" },
  { symbol: "TSLA", value: "HOLD" },
  { symbol: "AMZN", value: "SELL" },
  { symbol: "AMZN", value: "STRONG SELL" },
  { symbol: "AMZN", value: "BUY" },
];

let counterSell = 0;
let counterBuy = 0;
// let counterStrongSell = 0;
// let counterStrongBuy = 0;
let counterHold = 0;
let currentDataIndex = 0;
sellCounter.style.color = "red";
buyCounter.style.color = "blue";
holdCounter.style.color = "orange";
// strongSellCounter.style.color = "red";
// strongBuyCounter.style.color = "blue";
let sellCounterInterval, buyCounterInterval, holdCounterInterval, strongSellCounterInterval, strongBuyCounterInterval;

function updateTicker() {
  const currentData = datas[currentDataIndex];
  tickerValue.textContent = currentData.value;

  // Update gauge based on value
  gaugeNeedles.classList.remove("buy", "sell", "strongbuy", "strongsell");
  if (currentData.value === "STRONG BUY") {
    tickerValue.style.color = "blue";
    gaugeNeedles.classList.add("strongbuy");
    timer = 150000;
    clearInterval(sellCounterInterval);
    clearInterval(holdCounterInterval);
    // clearInterval(strongSellCounterInterval);
    // clearInterval(strongBuyCounterInterval);
    counterBuy++;
    buyCounter.textContent = counterBuy;
    if (!buyCounterInterval) {
      buyCounterInterval = setInterval(() => {
        counterBuy++;
        buyCounter.textContent = counterBuy;
      }, 1000);
    }
    buyCounterInterval.clearInterval
  } else if (currentData.value === "SELL") {
    tickerValue.style.color = "red";
    gaugeNeedles.classList.add("sell");
    timer = 150000;
    clearInterval(buyCounterInterval);
    clearInterval(holdCounterInterval);
    clearInterval(strongSellCounterInterval);
    clearInterval(strongBuyCounterInterval);
    counterSell++;
    sellCounter.textContent = counterSell;
    if (sellCounterInterval) {
      sellCounterInterval = setInterval(() => {
        counterSell++;
        sellCounter.textContent = counterSell;
      }, 2000);
    }
  } else if (currentData.value == "HOLD") {
    tickerValue.style.color = "#5C5C5C";
    timer = 3000;
    clearInterval(sellCounterInterval);
    clearInterval(buyCounterInterval);
    clearInterval(strongSellCounterInterval);
    clearInterval(strongBuyCounterInterval);
    counterHold++;
    holdCounter.textContent = counterHold;
    if (!holdCounterInterval) {
      holdCounterInterval = setInterval(() => {
        counterHold++;
        holdCounter.textContent = counterHold;
      }, 3000);
    }
  } else if (currentData.value === "BUY") {
    tickerValue.style.color = "blue";
    gaugeNeedles.classList.add("buy");
    timer = 150000;
    clearInterval(sellCounterInterval);
    clearInterval(holdCounterInterval);
    clearInterval(strongSellCounterInterval);
    clearInterval(strongBuyCounterInterval);
    counterBuy++;
    // buyCounter.textContent = counterBuy;
    if (buyCounterInterval) {
      buyCounterInterval = setInterval(() => {
        counterBuy++;
        buyCounter.textContent = counterBuy;
      }, 1000);
    }
  } else if (currentData.value === "STRONG SELL") {
    tickerValue.style.color = "red";
    gaugeNeedles.classList.add("strongsell");
    timer = 150000;
    clearInterval(buyCounterInterval);
    clearInterval(holdCounterInterval);
    // clearInterval(strongSellCounterInterval);
    // clearInterval(strongBuyCounterInterval);
    counterSell++;
    sellCounter.textContent = counterSell;
    if (!sellCounterInterval) {
      sellCounterInterval = setInterval(() => {
        counterSell++;
        sellCounter.textContent = counterSell;
      }, 2000);
    }
  }

  currentDataIndex = (currentDataIndex + 1) % datas.length; // Loop through data array
}

setInterval(updateTicker, 10000); // Update ticker every 10 seconds

updateTicker(); // Initial update
