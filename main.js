"use strict";
let mission = +prompt("Cколько вы хотите накопить?"),
  amount2,
  amount1;
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let expenses1, expenses2, money;
let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses1 = prompt("Введите обязательную статью расходов?");
    } else if (i === 1) {
      expenses2 = prompt("Введите обязательную статью расходов?");
    }
    sum += +prompt("Во сколько это обойдется?");
  }
  console.log(sum);
  return !isNumber(sum);
};
let expensesAmount = getExpensesMonth();

do {
  money = prompt("Ваш месячный доход?");
} while (!isNumber(money));
{
  money = prompt("Ваш месячный доход?");
}
function getAccumulatedMonth() {
  return money - (amount1 - amount2);
}
getAccumulatedMonth();

const getTargetMonth = function () {
  if (mission / money < 0) {
    console.log("Цель будет не достигнута");
  } else if (mission / money > 0) {
    console.log("Цель будет достигнута");
  }
  return Math.ceil(mission / money);
};
getTargetMonth();
