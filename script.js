"use strict";
const money = 50000,
  income = "20000",
  addExpenses = "FOOD,INTERNET,TAXI,ENTERTAINMENT",
  deposit = true,
  mission = 400000,
  period = 12,
  budgetDay = money / 30;
console.log(budgetDay);
console.log(typeof money);
console.log(typeof income);
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase().split(","));
console.log(typeof deposit);
console.log(mission, period);
