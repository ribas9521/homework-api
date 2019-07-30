const moment = require("moment");

exports.username = [
  { usernameId: 1, name: "Satoshi Nakamoto" },
  { usernameId: 2, name: "Vitalik Buterin" }
];

exports.performance = [
  {
    performanceId: 1,
    usernameId: 1,
    date: moment()
      .subtract(1, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },
  {
    performanceId: 2,
    usernameId: 1,
    date: moment()
      .subtract(2, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },
  {
    performanceId: 3,
    usernameId: 1,
    date: moment()
      .subtract(3, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },
  {
    performanceId: 4,
    usernameId: 1,
    date: moment()
      .subtract(4, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },
  {
    performanceId: 5,
    usernameId: 1,
    date: moment()
      .subtract(5, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  }
];

exports.portfolio = [
    {
        portfolioId: 1,
        usernameId: 1,
        coin: 'Bitcoin',
        amount: 1
    },
    {
        portfolioId: 2,
        usernameId: 1,
        coin: 'Ethereum',
        amount: 1.5
    },
    {
        portfolioId: 3,
        usernameId: 1,
        coin: 'Dogecoin',
        amount: 0.5
    },
    {
        portfolioId: 4,
        usernameId: 1,
        coin: 'Decred',
        amount: 2
    }
];
