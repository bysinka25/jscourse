"use strict";
const collections = document.querySelectorAll(".book"),
  adv = document.querySelector(".adv"),
  books = document.querySelector(".books"),
  body = document.querySelector("body"),
  h2 = document.querySelectorAll("h2"),
  li = document.querySelectorAll("li");
console.log(collections);
console.log(h2);
console.log(li);
adv.remove();
collections[0].before(collections[1]);
collections[5].after(collections[2]);
collections[3].before(collections[4]);
body.style.backgroundImage = "url(image/you-dont-know-js.jpg";
h2[4].textContent = "Книга 3. this и Прототипы Объектов";
collections[0].append(li[4]);
collections[0].append(li[5]);
collections[0].append(li[7]);
collections[0].append(li[9]);
collections[0].append(li[10]);
collections[5].prepend(li[50]);
collections[5].prepend(li[49]);
collections[5].prepend(li[55]);
collections[5].prepend(li[47]);
collections[5].prepend(li[46]);
collections[5].prepend(h2[5]);
let textNode = document.createTextNode("Глава 8: За пределами ES6");
console.log(textNode);
collections[2].append(textNode);
collections[2].append(li[26]);
