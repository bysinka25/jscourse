"use strict";
const date = new Date(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  options = { weekday: "long" },
  day = new Intl.DateTimeFormat("ru-RU", options).format(date);
function getTime() {
  const dateStop = new Date(2021, 11, 31);
  const time = Math.floor(new Date(dateStop - date) / 1000 / 60 / 60 / 24);
  function greeting() {
    if (hours < 12) {
      console.log("Доброе утро!");
    }
    if (hours > 12) {
      console.log("Добрый день!");
    } else {
      console.log("Добрый вечер!");
    }
  }
  greeting();
  console.log(
    "Сегодня : " + day,
    "Текущее время: " + hours + ":" + minutes + ":" + seconds,
    "До нового года осталось" + ": " + time + " дней"
  );
}
getTime("31 december 2021");
