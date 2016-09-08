var fs = require('fs');
// var dates = [];

// for (var i = 1; i < 31; i++) {
//   dates.push(`09-${i}-2016`);
// }

// console.log(dates);


// function getRandomExpenses() {
//   var expenses = {
//     5: 'coffee',
//     3: 'cups',
//     1: 'filters',
//     2: 'utilities',
//     7: 'equipment',
//     10: 'salaries'
//   };

//   var randomExpenses = {};
//   randomExpenses['rent'] = 130.33;
//   for (var multiplier in expenses) {
//     randomExpenses[expenses[multiplier]] = parseFloat((Math.random() * multiplier * 30).toFixed(2));
//   }
//   return randomExpenses;
// }

// var data = dates.map(date => {
//   return {
//     date: date,
//     expenses: getRandomExpenses()
//   }
// });

// data = JSON.stringify(data);
// fs.writeFileSync('expenses.json', data);

var data = fs.readFileSync('expenses.json');
var dailyIncome = 1000
data = JSON.parse(data);
let netProfit = data.map(day => {
  return {
    date: day.date,
    netProfit: parseFloat((dailyIncome - Object.keys(day.expenses).map(a => day.expenses[a]).reduce((a, b) => a + b)).toFixed(2))
  }
})
// console.log(netProfit);
netProfit = JSON.stringify(netProfit);
fs.writeFileSync('netProfit.json', netProfit);
