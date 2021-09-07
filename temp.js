// "use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const startButton = document.getElementById("start"),
  cancelButton = document.getElementById("cancel"),
  incomePlus = document.querySelectorAll("button")[0],
  expensesPlus = document.querySelectorAll("button")[1],
  depositCheck = document.querySelector("#deposit-check"),
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  budgetDayValue = document.querySelector(".budget_day-value"),
  expensesMonthValue = document.querySelector(".expenses_month-value"),
  additionalIncomeValue = document.querySelector(".additional_income-value"),
  incomePeriodValue = document.querySelector(".income_period-value"),
  targetMonthValue = document.querySelector(".target_month-value"),
  salaryAmount = document.querySelector(".salary-amount"),
  incomeTitle = document.querySelectorAll(".income-title")[1],
  expensesTitle = document.querySelectorAll(".expenses-title")[1],
  additionalExpensesItem = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount"),
  range = document.querySelector(".period-select"),
  budgetMonthValue = document.querySelector(".budget_month-value");

let expensesItems = document.querySelectorAll(".expenses-items"),
  incomeItems = document.querySelectorAll(".income-items"),
  additionalExpensesValue = document.querySelector(
    ".additional_expenses-value"
  );

// object start --------------------------------------------------------------
const appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  incomeMonth: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  reset: function () {
    const inputDis = document.getElementsByTagName("input")[0];
    const inputDis1 = document.getElementsByTagName("input")[1];
    const inputDis2 = document.getElementsByTagName("input")[2];
    const inputDis3 = document.getElementsByTagName("input")[3];
    const inputDis4 = document.getElementsByTagName("input")[4];
    const inputDis5 = document.getElementsByTagName("input")[5];
    const inputDis6 = document.getElementsByTagName("input")[6];
    const inputDis7 = document.getElementsByTagName("input")[7];
    const inputDis8 = document.getElementsByTagName("input")[8];
    const inputDis11 = document.getElementsByTagName("input")[11];
    const inputDis12 = document.getElementsByTagName("input")[12];
    inputDis.value = "";
    inputDis1.value = "";
    inputDis2.value = "";
    inputDis3.value = "";
    inputDis4.value = "";
    inputDis5.value = "";
    inputDis6.value = "";
    inputDis7.value = "";
    inputDis8.value = "";
    inputDis11.value = "";
    inputDis12.value = "";
  },
  start: function () {
    if (budgetMonthValue.value > 0) {
      return;
    }
    appData.budget = +salaryAmount.value;
    this.getExpenses.bind(this);
    this.getIncome.bind(this);
    this.getExpensesMonth.bind(this);
    this.getAddExpensions.bind(this);
    this.getAddIncome.bind(this);
    this.getBudget.bind(this);
    this.showResult.bind(this);
    // appData.getExpenses();
    // appData.getIncome();
    // appData.getExpensesMonth();
    // appData.getAddExpensions();
    // appData.getAddIncome();
    // appData.getBudget();
    // appData.showResult();
    console.log(this);
    console.log(appData.start.bind(appData));
  },
  showResult: function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = "";
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = "";
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcPeriod();
    range.addEventListener("input", function () {
      incomePeriodValue.value = this.calcPeriod();
    });
    console.log(this);
  },
  addExpensesBlock: function () {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  },

  getExpenses: function () {
    expensesItems.forEach(function (item) {
      const itemExpenses = item.querySelector(".expenses-title").value;
      const cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        appData.expenses[itemExpenses] = cashExpenses;
      }
      console.log(this);
    });
  },
  addIncomeBlock: function () {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length === 3) {
      incomePlus.style.display = "none";
    }
    console.log(this);
  },
  rangeChangeValue: function () {
    document.querySelector(".period-amount").textContent = range.value;
    console.log(this);
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      const itemIncome = item.querySelector(".income-title").value;
      const cashIncome = item.querySelector(".income-amount").value;
      appData.income[itemIncome] = cashIncome;
      console.log(this);
    });

    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpensions: function () {
    const addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
      console.log(this);
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      const itemValue = item.value.trim();
      if (itemValue !== "") {
        this.addIncome.push(itemValue);
      }
      console.log(this);
    });
  },
  getExpensesMonth: function () {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth =
      appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  },
  getStatusIncome: function () {
    if (this.budgetDay >= 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
      console.log("У вас средний уровень дохода");
    } else if (this.budgetDay >= 0 && this.budgetDay < 600) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    } else if (this.budgetDay < 0) {
      console.log("Что то пошло не так");
    }
  },
  getInfoDeposit: function () {
    if (this.deposit) {
      do {
        this.percentDeposit = prompt("Какой годовой процент?", "0.5");
      } while (!isNumber(this.percentDeposit));
      do {
        this.moneyDeposit = prompt("Какая сумма заложена?", 10000);
      } while (!isNumber(this.moneyDeposit));
    }
  },
  calcPeriod: function () {
    return this.budgetMonth * range.value;
  },
};

// object end  --------------------------------------------------------------

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  if (salaryAmount.value !== "") {
    appData.start();
  }
  const inputDis = document.getElementsByTagName("input")[0];
  const inputDis1 = document.getElementsByTagName("input")[1];
  const inputDis2 = document.getElementsByTagName("input")[2];
  const inputDis3 = document.getElementsByTagName("input")[3];
  const inputDis4 = document.getElementsByTagName("input")[4];
  const inputDis5 = document.getElementsByTagName("input")[5];
  const inputDis6 = document.getElementsByTagName("input")[6];
  const inputDis7 = document.getElementsByTagName("input")[7];
  const inputDis8 = document.getElementsByTagName("input")[8];
  const inputDis11 = document.getElementsByTagName("input")[11];
  const inputDis12 = document.getElementsByTagName("input")[12];
  inputDis.disabled = true;
  inputDis1.disabled = true;
  inputDis2.disabled = true;
  inputDis3.disabled = true;
  inputDis4.disabled = true;
  inputDis5.disabled = true;
  inputDis6.disabled = true;
  inputDis7.disabled = true;
  inputDis8.disabled = true;
  inputDis11.disabled = true;
  inputDis12.disabled = true;
  // inputDis.forEach(function(entry)){
  //   entry.addEventListener("click", function(){})}

  // }
  cancelButton.style.display = "block";
  console.log(inputDis);
});
cancelButton.addEventListener("click", function () {
  cancelButton.style.display = "none";
  startButton.style.display = "block";
  const inputDis = document.getElementsByTagName("input")[0];
  const inputDis1 = document.getElementsByTagName("input")[1];
  const inputDis2 = document.getElementsByTagName("input")[2];
  const inputDis3 = document.getElementsByTagName("input")[3];
  const inputDis4 = document.getElementsByTagName("input")[4];
  const inputDis5 = document.getElementsByTagName("input")[5];
  const inputDis6 = document.getElementsByTagName("input")[6];
  const inputDis7 = document.getElementsByTagName("input")[7];
  const inputDis8 = document.getElementsByTagName("input")[8];
  const inputDis11 = document.getElementsByTagName("input")[11];
  const inputDis12 = document.getElementsByTagName("input")[12];
  inputDis.disabled = false;
  inputDis1.disabled = false;
  inputDis2.disabled = false;
  inputDis3.disabled = false;
  inputDis4.disabled = false;
  inputDis5.disabled = false;
  inputDis6.disabled = false;
  inputDis7.disabled = false;
  inputDis8.disabled = false;
  inputDis11.disabled = false;
  inputDis12.disabled = false;
  appData.reset();
});

expensesPlus.addEventListener("click", appData.addExpensesBlock);
incomePlus.addEventListener("click", appData.addIncomeBlock);
range.addEventListener("input", appData.rangeChangeValue);

console.log("расходы за месяц: ", appData.expensesMonth);

// appData.getTargetMonth() > 0
//   ? console.log(
//       "Цель будет достигнута за " + appData.getTargetMonth() + " месяца"
//     )
//   : console.log("Цель не будет достигнута");

// appData.getStatusIncome();

const arr = appData.addExpenses.map(function (val) {
  const str = val.trim();
  return str[0].toUpperCase() + str.slice(1);
});
// startButton.addEventListener("click", function () {
//   startButton.style.display = "none";
// });
// result - target_month;
// result - income_period;
// result - additional_income;
// result - expenses_month;
// result - budget_day;
// result - budget_month;
// title;
// deposit - calc;
// additional_expenses - item;
// expenses - amount;
// expenses - title;
// additional_income - item;
// additional_income - item;
// income - amount;
// income - title;
// salaryAmount;
