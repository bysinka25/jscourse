// "use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const startButton = document.getElementById("start"),
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
  if (salaryAmount.value !== "") {
    appData.start();
  }
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
startButton.addEventListener("click", function () {
  startButton.style.display = "none";
});
