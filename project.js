// 1. Deposit Money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin
// 5. check win conditions
// 6. give the user their winnings
// 7. play loop

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberdepositAmount = parseFloat(depositAmount);

    if (isNaN(numberdepositAmount) || numberdepositAmount <= 0) {
      console.log("Invalid amount of money...");
    } else {
      return numberdepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter bet on number of lines(1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid amount of number of lines...");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter total bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid amount of bet, try again.");
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
