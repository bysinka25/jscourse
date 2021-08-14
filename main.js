"use strict";
const money = prompt("Ваш месячный доход?"),
  addExpenses = prompt(
    "Перечислите возможные расходы за рассчитываемый период через запятую",
    "Квартплата, проездной, кредит"
  ),
  deposit = confirm("Есть ли у вас депозит в банке"),
  expenses1 = prompt("Введите обязательную статью расходов?"),
  amount1 = prompt("Во сколько это обойдется?"),
  expenses2 = prompt("Введите обязательную статью расходов?"),
  amount2 = prompt("Во сколько это обойдется?"),
  budgetMonth = money - amount1 - amount2,
  mission = prompt("Сколько вы хотите накопить?"),
  period = Math.ceil(mission / budgetMonth),
  budgetDay = Math.floor(budgetMonth / 30);
console.log(typeof money);
console.log("Ваши расходы" + addExpenses);
console.log(typeof deposit);
console.log(expenses1);
console.log(amount1);
console.log(expenses2);
console.log(amount2);
console.log("Ваш дневной бюджет:" + Math.ceil(budgetMonth));
console.log("Вы хотите на копить:" + mission);
console.log("Вы накопите за: " + period);
if (budgetDay > 1200) {
  alert("У вас высокий уровень дохода");
} else if (600 < budgetDay <= 1200) {
  alert("У вас cредний уровень дохода");
} else if (600 >= budgetDay >= 0) {
  alert("У вас низкий уровень дохода");
}
if (budgetDay < 0) {
  alert("Что-то пошло не так");
}
