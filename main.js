"use strict";
let money, expenses;
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
function start() {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
}
start();
const appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 12,
  money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  budget: money,
  asking: function () {
    let addExpenses = prompt("Перечислите возможные расходы");
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    for (let i = 0; i < 2; i++) {
      appData.expenses = prompt("Введите обязательную статью расходов?");
      do {
        appData.expenses = +prompt("Во сколько это обойдется?");
      } while (!isNumber(appData.expenses));
    }
    console.log(appData.expenses);
    console.log(appData.addExpenses);
  },
  getExpensesMonth: function getExpensesMonth() {
    for (let key in expenses) {
      console.log(key + ":" + expenses[key]);
    }
  },
  getBudget: function getBudget() {
    console.log(appData.budgetMonth + appData.budgetDay);
  },
  getTargetMonth: function getTargetMonth() {
    if (appData.mission / appData.money < 0) {
      console.log("Цель будет не достигнута");
    } else {
      console.log("Цель будет достигнута");
    }
  },
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log("Расходы за месяц: " + (appData.expenses + appData.expenses));
console.log("За какой период будет достигнута цель = " + appData.period);
console.log("Ваш месячный доход " + money);
for (let end in appData) {
  let key = appData[end];
  console.log("obj." + end + "=" + appData[end]);
}
