let madeCount = 0, soldCount = 0, moneyEarned = 0;

const makeWafflesButtonEl = document.getElementById("makeWafflesButton");
const showVafflerEl = document.getElementById("showVaffler");
const sellWafflesButtonEl = document.getElementById("sellWafflesButton");
const showSoldEl = document.getElementById("showSold");
const showMoneyEl = document.getElementById("showMoney");

makeWafflesButtonEl.addEventListener("click", () => {
    madeCount += 1;
    showVafflerEl.innerText = "Vaffler laget: " + madeCount;
    }
  );
  
  sellWafflesButtonEl.addEventListener("click", () => {
    
    if (madeCount > 0) {
        soldCount += 1;
        madeCount -= 1;
        moneyEarned += 20;
        showVafflerEl.innerText = "Vaffler laget: " + madeCount;
        showSoldEl.innerText = "Antall solgt: " + soldCount;
        showMoneyEl.innerText = "kr: " + moneyEarned;
    } 
});
