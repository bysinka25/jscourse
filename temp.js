"use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
function number() {
  let showNumber = 10;
  let n;
  n = prompt("Введите число от 1 до 99");
  if (n === 10) {
    console.log("вы победили" + n);
    prompt("Вы победили");
    return;
  }
  if (n === null) {
    alert("Пока");
    console.log("отмена" + n);
    parseInt(n);
    return;
  }

  if (n < showNumber) {
    alert("Загаданное число больше");
    number();
    parseInt(n);
  }
  if (n > showNumber) {
    alert("Загаданное число меньше");
    number();
    parseInt(n);
  }

  if (!isNumber(n)) {
    alert("Введите число!");
    console.log("введите число" + n);
    number();
  }
}
number();
