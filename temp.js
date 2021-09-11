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
const Appdata = function () {
  this.income = {};
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.incomeMonth = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

Appdata.prototype.reset = function () {
  const inputDis = document.querySelectorAll("input");
  const resultInputAll = document.querySelectorAll(
    ".result input[type = text]"
  );
  inputDis.forEach(function (elem) {
    console.log(elem);
    elem.value = "";
    elem.disabled = false;
    const periodSelect = document.querySelectorAll("period-select");
    periodSelect.value = "0";
  });
  resultInputAll.forEach(function (elem) {
    elem.value = "";
  });
  for (let i = 1; 1 < incomeItems.length; i++) {
    incomeItems[i].parentNode.removeChild(incomeItems[1]);
    incomePlus.style.display = "block";
  }
  for (let i = 1; 1 < expensesItems.length; i++) {
    expensesItems[i].parentNode.removeChild(expensesItems[1]);
    expensesPlus.style.display = "block";
  }
  this.income = {};
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.incomeMonth = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  cancelButton.style.display = "none";
  startButton.style.display = "block";
  console.log(this.budget);
  this.reset();
};
Appdata.prototype.start = function () {
  const inputDis = document.querySelectorAll("input");
  let array = [inputDis];
  inputDis.forEach(function (elem) {
    console.log(elem);
    elem.disabled = true;
  });
  console.log(array);
  startButton.style.display = "none";
  if (salaryAmount.value !== "") {
    cancelButton.style.display = "block";
    if (budgetMonthValue.value > 0) {
      return;
    }
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpensions();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
    console.log(this);
  }
  this.showResult();
};

Appdata.prototype.addExpensesBlock = function () {
  const cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  expensesItems = document.querySelectorAll(".expenses-items");
  if (expensesItems.length === 3) {
    expensesPlus.style.display = "none";
  }
};

Appdata.prototype.getExpenses = function () {
  expensesItems.forEach(function (item) {
    const _this = this;
    const itemExpenses = item.querySelector(".expenses-title").value;
    const cashExpenses = item.querySelector(".expenses-amount").value;
    if (itemExpenses !== "" && cashExpenses !== "") {
      _this.expenses[itemExpenses] = cashExpenses;
    }
    console.log(this);
  }, this);
};
Appdata.prototype.addIncomeBlock = function () {
  const cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll(".income-items");
  if (incomeItems.length === 3) {
    incomePlus.style.display = "none";
  }
  console.log(this);
};
Appdata.prototype.rangeChangeValue = function () {
  document.querySelector(".period-amount").textContent = range.value;
  console.log(this);
};
Appdata.prototype.getIncome = function () {
  incomeItems.forEach(function (item) {
    const itemIncome = item.querySelector(".income-title").value;
    const cashIncome = item.querySelector(".income-amount").value;
    this.income[itemIncome] = cashIncome;
    console.log(this);
  }, this);

  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
};
Appdata.prototype.getAddExpensions = function () {
  const addExpenses = additionalExpensesItem.value.split(",");
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== "") {
      this.addExpenses.push(item);
    }
    console.log(this);
  }, this);
};
Appdata.prototype.getAddIncome = function () {
  additionalIncomeItem.forEach(function (item) {
    const itemValue = item.value.trim();
    if (itemValue !== "") {
      this.addIncome.push(itemValue);
    }
    console.log(this);
  }, this);
};
Appdata.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};
Appdata.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};
Appdata.prototype.getTargetMonth = function () {
  return Math.ceil(targetAmount.value / this.budgetMonth);
};
Appdata.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
    console.log("У вас средний уровень дохода");
  } else if (this.budgetDay >= 0 && this.budgetDay < 600) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  } else if (this.budgetDay < 0) {
    console.log("Что то пошло не так");
  }
};
Appdata.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    do {
      this.percentDeposit = prompt("Какой годовой процент?", "0.5");
    } while (!isNumber(this.percentDeposit));
    do {
      this.moneyDeposit = prompt("Какая сумма заложена?", 10000);
    } while (!isNumber(this.moneyDeposit));
  }
};
Appdata.prototype.calcPeriod = function () {
  return this.budgetMonth * range.value;
};
Appdata.prototype.eventListeners = function () {
  startButton.addEventListener("click", this.start.bind(this));
  cancelButton.addEventListener("click", this.reset.bind(this));
  expensesPlus.addEventListener("click", this.addExpensesBlock.bind(this));
  incomePlus.addEventListener("click", this.addIncomeBlock.bind(this));
  range.addEventListener("input", this.rangeChangeValue.bind(this));

  console.log("расходы за месяц: ", this.expensesMonth);

  const arr = this.addExpenses.map(function (val) {
    const str = val.trim();
    return str[0].toUpperCase() + str.slice(1);
  });
};
Appdata.prototype.showResult = function () {
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = "";
  additionalExpensesValue.value = this.addExpenses.join(", ");
  additionalIncomeValue.value = "";
  additionalIncomeValue.value = this.addIncome.join(", ");
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcPeriod();
  console.log(this);
};
const appdata = new Appdata();
appdata.eventListeners();
console.log(appdata);
// object end  --------------------------------------------------------------
