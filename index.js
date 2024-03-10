const tickerText = document.getElementById("ticker-text");
const tickerValue = document.getElementById("ticker-value");
const tickerSymbol = document.getElementById("ticker-symbol");
const gaugeNeedles = document.getElementById("gauge-needle");

// Simulated data array (replace with your actual data source)
const datas = [
    { symbol: "TSLA", value: "HOLD" },
    { symbol: "AAPL", value: "STRONG BUY" },
    { symbol: "TSLA", value: "HOLD" },
    { symbol: "AMZN", value: "SELL" }
];

let currentDataIndex = 0;

function updateTicker() {
    const currentData = datas[currentDataIndex];
    // tickerText.textContent = `${currentData.symbol}`;
    tickerValue.textContent = currentData.value;

    // Update gauge based on value
    gaugeNeedles.classList.remove("buy", "sell");
    if (currentData.value === "STRONG BUY") {
        gaugeNeedles.classList.add("buy");
    } else if (currentData.value === "SELL") {
        gaugeNeedles.classList.add("sell");
    }

    currentDataIndex = (currentDataIndex + 1) % datas.length; // Loop through data array
}

setInterval(updateTicker, 3000); // Update ticker every 3 seconds

updateTicker(); // Initial update
