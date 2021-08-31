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
  percentDeposit: 0,
  moneyDeposit: 0,
  asking: function () {
    if (confirm("Есть ли у вас дополнительный заработок?")) {
      let itemIncome = prompt(
        "Какой у вас дополнительный заработок?",
        "Кручу роллы"
      );
      if (isNumber(itemIncome)) {
        alert("Только буквы!");
        this.asking();
      }

      let cashIncome = prompt("Сколько зарабатываете на этом?", 30000);
      appData.income[itemIncome] = cashIncome;
      if (!isNumber(cashIncome)) {
        alert("не явлется числом");
        this.asking();
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
      if (isNumber(appData.expenses[0])) {
        alert("Только буквы!");
        this.asking();
      }
      do {
        appData.expenses = +prompt("Во сколько это обойдется?");
      } while (!isNumber(appData.expenses));
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
      if (!isNumber(appData.percentDeposit)) {
        alert("Только цифры!");
        this.getInfoDeposit();
      }
      appData.moneyDeposit = prompt("Какая сумма заложена", 50000);
    }
    if (!isNumber(appData.moneyDeposit)) {
      alert("Только цифры!");
      this.getInfoDeposit();
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

const cancel = document.querySelector("#cancel");
const button = document.querySelector("#start");
const salary = document.getElementsByClassName[0](".salary-amount");
const come = document.getElementsByClassName[0](".income-amount");
const expensesAmount = document.getElementsByClassName[0](".expenses-amount");
const add = document.getElementsByClassName[0](".additional_expenses-item");
const plus1 = document.getElementsByTagName(".income_add");
const plus2 = document.getElementsByTagName(".expenses_add");
const checkbox = document.querySelector("#deposit-check");
const item = document.querySelectorAll(".additional_income-item");
const budgetDay = document.getElementsByClassName[0](".budget_day-value");
const expen = document.getElementsByClassName[0](".expenses_month-value");
const additional = document.getElementsByClassName[0](
  ".additional_income-value"
);
const additionalExpenses = document.getElementsByClassName[0](
  ".additional_expenses-value"
);
const income = document.getElementsByClassName(".income_period-value");
const target = document.getElementsByClassName(".target_month-value");
const period = document.getElementsByClassName(".period-select");
console.log(cancel);
console.log(button);
console.log(plus1);
console.log(plus2);
console.log(checkbox);
console.log(budgetDay);
console.log(expen);
console.log(additional);
console.log(additionalExpenses);
console.log(income);
console.log(target);
console.log(salary);
console.log(come);
console.log(expensesAmount);
console.log(add);
console.log(period);
