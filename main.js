"use strict";
const expensesItems = document.querySelectorAll(".expenses-items")[0];
const button1 = document.querySelectorAll("button");
const cancel = document.querySelector("#cancel");
const button = document.querySelector("#start");
const salary = document.getElementsByClassName("salary-amount")[0];
const come = document.getElementsByClassName("income-amount")[0];
const expensesAmount = document.getElementsByClassName("expenses-amount")[0];
const expensesTitle = document.getElementsByClassName("expenses-title")[1];
const add = document.getElementsByClassName("additional_expenses-item")[0];
const plus1 = document.getElementsByTagName("button")[0];
const plus2 = document.getElementsByTagName("button")[1];
const checkbox = document.querySelector("#deposit-check");
const item = document.querySelectorAll("additional_income-item");
const budgetDay = document.getElementsByClassName("budget_day-value")[0];
const expen = document.getElementsByClassName("expenses_month-value")[0];
const additional = document.getElementsByClassName(
  "additional_income-value"
)[0];
const additionalExpenses = document.getElementsByClassName(
  "additional_expenses-value"
)[0];
const income = document.getElementsByClassName("income_period-value")[0];
const incomeTitle = document.getElementsByClassName("income-title")[1];
const target = document.getElementsByClassName("target_month-value")[0];
const targetAmount = document.getElementsByClassName("target-amount")[0];
const period = document.getElementsByClassName("period-select")[0];
const additionalItem = document.getElementsByClassName(
  "additional_income-item"
)[0];
const additionalItem1 = document.getElementsByClassName(
  "additional_income-item"
)[1];
console.log(button1);
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
console.log(targetAmount);
console.log(expensesTitle);
console.log(incomeTitle);
console.log(additionalItem);
console.log(additionalItem1);

let expenses;
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 12,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  budget: 0,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function () {
    if (salary.value === "") {
      alert("Error");
      return;
    }
    appData.budget = salary.value;
    console.log("salary.value: ", salary.value);

    appData.getExpenses();
    //     appData.getExpensesMonth();
    // appData.getBudget();
    // appData.getTargetMonth();
  },
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
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title");
      let cashExpenses = item.querySelector(".expenses-amount");
      if (itemExpenses !== "" && cashExpenses !== "") {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getBudget: function getBudget() {
    // console.log(appData.budgetMonth + appData.budgetDay);
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  addExpensesBlock: function () {
    console.log(expensesItems.parentNode);
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plus2);
    if (expensesItems.length === 3) {
      plus2.style.display = "none";
    }
  },
  // getTargetMonth: function getTargetMonth() {
  //   if (appData.mission / appData.money < 0) {
  //     console.log("Цель будет не достигнута");
  //   } else {
  //     console.log("Цель будет достигнута");
  //   }
  // },
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
const start = document.getElementById("start");

start.addEventListener("click", appData.start);

console.log("За какой период будет достигнута цель = " + appData.period);
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

plus2.addEventListener("click", appData.addExpensesBlock);
console.log(appData.expensesItems);
