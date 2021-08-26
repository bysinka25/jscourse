"use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
function loopBack() {
  let showNumber = 10;
  function number() {
    let n;
    n = prompt("Введите число от 1 до 99");
    if (parseInt(n) === 10) {
      console.log("вы победили" + n);
      alert("Вы победили");
      return;
    }
    if (parseInt(n) === null) {
      alert("Пока");
      console.log("отмена" + n);
      return;
    }

    if (parseInt(n) < showNumber) {
      alert("Загаданное число больше");
      number();
    }
    if (parseInt(n) > showNumber) {
      alert("Загаданное число меньше");
      number();
    }

    if (!isNumber(n)) {
      alert("Введите число!");
      console.log("введите число" + n);
      number();
    }
  }
  number();
}
loopBack();
