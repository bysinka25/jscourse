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
class Appdata {
  constructor(
    income = {},
    addIncome = [],
    expenses = {},
    addExpenses = [],
    deposit = false,
    percentDeposit = 0,
    moneyDeposit = 0,
    budget = 0,
    incomeMonth = 0,
    budgetDay = 0,
    budgetMonth = 0,
    expensesMonth = 0
  ) {
    this.income = income;
    this.addIncome = addIncome;
    this.expenses = expenses;
    this.addExpenses = addExpenses;
    this.deposit = deposit;
    this.percentDeposit = percentDeposit;
    this.moneyDeposit = moneyDeposit;
    this.budget = budget;
    this.incomeMonth = incomeMonth;
    this.budgetDay = budgetDay;
    this.budgetMonth = budgetMonth;
    this.expensesMonth = expensesMonth;
  }
  reset() {
    const inputDis = document.querySelectorAll("input");
    const resultInputAll = document.querySelectorAll(
      ".result input[type = text]"
    );
    inputDis.forEach((elem) => {
      elem.value = "";
      elem.disabled = false;
      const periodSelect = document.querySelectorAll("period-select");
      periodSelect.value = "0";
    });
    resultInputAll.forEach((elem) => {
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
  }
  start() {
    const inputDis = document.querySelectorAll("input");
    let array = [inputDis];
    inputDis.forEach((elem) => {
      elem.disabled = true;
    });
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
    }
    this.showResult();
  }
  addExpensesBlock() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  }
  getExpenses() {
    expensesItems.forEach((item) => {
      const itemExpenses = item.querySelector(".expenses-title").value;
      const cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  }
  addIncomeBlock() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length === 3) {
      incomePlus.style.display = "none";
    }
  }
  rangeChangeValue() {
    document.querySelector(".period-amount").textContent = range.value;
  }
  getIncome() {
    incomeItems.forEach((item) => {
      const itemIncome = item.querySelector(".income-title").value;
      const cashIncome = item.querySelector(".income-amount").value;
      this.income[itemIncome] = cashIncome;
    });

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }
  getAddExpensions() {
    const addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
    });
  }
  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();
      if (itemValue !== "") {
        this.addIncome.push(itemValue);
      }
    });
  }
  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }
  getBudget() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }
  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }
  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
      console.log("У вас средний уровень дохода");
    } else if (this.budgetDay >= 0 && this.budgetDay < 600) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    } else if (this.budgetDay < 0) {
      console.log("Что то пошло не так");
    }
  }
  getInfoDeposit() {
    if (this.deposit) {
      do {
        this.percentDeposit = prompt("Какой годовой процент?", "0.5");
      } while (!isNumber(this.percentDeposit));
      do {
        this.moneyDeposit = prompt("Какая сумма заложена?", 10000);
      } while (!isNumber(this.moneyDeposit));
    }
  }
  calcPeriod() {
    return this.budgetMonth * range.value;
  }
  eventListeners() {
    startButton.addEventListener("click", this.start.bind(this));
    cancelButton.addEventListener("click", this.reset.bind(this));
    expensesPlus.addEventListener("click", this.addExpensesBlock.bind(this));
    incomePlus.addEventListener("click", this.addIncomeBlock.bind(this));
    range.addEventListener("input", this.rangeChangeValue.bind(this));

    const arr = this.addExpenses.map(function (val) {
      const str = val.trim();
      return str[0].toUpperCase() + str.slice(1);
    });
  }
  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = "";
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = "";
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcPeriod();
  }
}
const appdata = new Appdata();
appdata.eventListeners();

// object end  --------------------------------------------------------------
