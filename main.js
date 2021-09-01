"use strict";
let money, expenses;
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};
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
  percentDeposit: 0,
  moneyDeposit: 0,
  asking: function () {
    if (confirm("Есть ли у вас дополнительный заработок?")) {
      let itemIncome = prompt(
        "Какой у вас дополнительный заработок?",
        "Кручу роллы"
      );
      while (isNumber(itemIncome)) {
        itemIncome = prompt(
          "Какой у вас дополнительный заработок?",
          "Кручу роллы"
        );
      }

      let cashIncome = prompt("Сколько зарабатываете на этом?", 30000);
      appData.income[itemIncome] = cashIncome;
      while (!isNumber(cashIncome)) {
        cashIncome = prompt("Сколько зарабатываете на этом?", 30000);
      }
    }
    let addExpenses = prompt("Перечислите возможные расходы");
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    let upperUp = "";
    for (let item of appData.addExpenses) {
      let upper = item.charAt(0).toUpperCase() + item.slice(1);
      upperUp += " , " + upper;
    }
    for (let i = 0; i < 2; i++) {
      appData.expenses = prompt("Введите обязательную статью расходов?");
      while (isNumber(appData.expenses[0])) {
        appData.expenses = prompt("Введите обязательную статью расходов?");
      }
      do {
        appData.expenses = +prompt("Во сколько это обойдется?");
      } while (!isNumber(appData.expenses));
      {
        appData.expenses = +prompt("Во сколько это обойдется?");
      }
    }
    console.log(appData.expenses);
    console.log(appData.addExpenses);
    console.log(upperUp.slice(3));
  },
  getExpensesMonth: function getExpensesMonth() {
    for (let key in expenses) {
      console.log(key + ":" + expenses[key]);
    }
  },
  getBudget: function getBudget() {
    // console.log(appData.budgetMonth + appData.budgetDay);
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function getTargetMonth() {
    if (appData.mission / appData.money < 0) {
      console.log("Цель будет не достигнута");
    } else {
      console.log("Цель будет достигнута");
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = prompt("Какой годовой процент", 10);
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = prompt("Какой годовой процент", 10);
      }
      appData.moneyDeposit = prompt("Какая сумма заложена", 50000);
    }
    while (!isNumber(appData.moneyDeposit)) {
      appData.moneyDeposit = prompt("Какая сумма заложена", 50000);
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
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
appData.getInfoDeposit();
console.log(
  appData.calcSavedMoney(),
  appData.percentDeposit,
  appData.moneyDeposit
);
