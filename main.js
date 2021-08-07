"use strict";
let money = prompt("Ваш месячный доход?"),
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
  period = mission / budgetMonth,
  budgetDay = money / 30;
console.log(money);
console.log(addExpenses);
console.log(deposit);
console.log(expenses1);
console.log(amount1);
console.log(expenses2);
console.log(amount2);
console.log(budgetMonth);
console.log(mission);
console.log(period);
Math.ceil(budgetMonth);
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
