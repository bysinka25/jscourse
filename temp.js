"use strict";
let money = prompt("Ваш месячный доход?"),
  income = "фриланс",
  addExpenses = prompt(
    "Перечислите возможные расходы за рассчитываемый период через запятую",
    "Квартплата, проездной, кредит"
  ),
  deposit = confirm("Есть ли у вас депозит в банке"),
  expenses1 = prompt("Введите обязательную статью расходов?"),
  amount1 = +prompt("Во сколько это обойдется?"),
  expenses2 = prompt("Введите обязательную статью расходов?"),
  amount2 = +prompt("Во сколько это обойдется?"),
  mission = +prompt("Сколько вы хотите накопить?"),
  res,
  period = Math.ceil(mission / (money - amount1 - amount2)),
  budgetDay = Math.floor(res / 30);
let showTypeOf = function (data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(deposit);
showTypeOf(income);
console.log(budgetDay);
console.log(addExpenses.split(","));
console.log("Ваши расходы" + addExpenses);
console.log(expenses1);
console.log(amount1);
console.log(expenses2);
console.log(amount2);
console.log("Ваш дневной бюджет:" + (money - amount1 - amount2));
console.log("Вы хотите на копить:" + mission);
console.log("Вы накопите за: " + period);
Math.ceil(money - amount1 - amount2);
Math.floor(budgetDay);
if (budgetDay > 1200) {
  alert("У вас высокий уровень дохода");
} else if (600 < budgetDay <= 1200) {
  alert("У вас cредний уровень дохода");
} else if (600 >= budgetDay >= 0) {
  alert("У вас низкий уровень дохода");
}
if (budgetDay <= -1) {
  alert("Что-то пошло не так");
}

let sum;
function getExpensesMonth() {
  sum = amount1 + amount2;
}
getExpensesMonth();
console.log(sum);

function getAccumulatedMonth() {
  res = money - amount1 - amount2;
}
getAccumulatedMonth();
console.log(res);

const accumulatedMonth = function () {
  res = money - amount1 - amount2;
};
accumulatedMonth();

let per;
function getTargetMonth() {
  per = Math.ceil(mission / res);
}
getTargetMonth();
console.log(per);

function getStatusIncome() {}
getStatusIncome();
