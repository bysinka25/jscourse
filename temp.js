"use strict";

const money = prompt("Ваш месячный доход?"),
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
  period = Math.ceil(mission / (money - amount1 - amount2));
function getAccumulatedMonth() {
  return money - (amount1 - amount2);
}
getAccumulatedMonth();
const budgetDay = Math.floor(getAccumulatedMonth() / 30);
const showTypeOf = function (data) {
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

function getExpensesMonth() {
  return amount1 + amount2;
}
getExpensesMonth();

function getTargetMonth() {
  return Math.ceil(mission / getAccumulatedMonth());
}
getTargetMonth();

const accumulatedMonth = function () {
  return money - (amount1 - amount2);
};
accumulatedMonth();
