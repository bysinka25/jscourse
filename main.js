"use strict";
const todoControl = document.querySelector(".todo-control"),
  headerInput = document.querySelector(".header-input"),
  todoList = document.querySelector(".todo-list"),
  todoCompleted = document.querySelector(".todo-completed");
const todoData = localStorage.todoData ? JSON.parse(localStorage.todoData) : [];
const render = function () {
  todoList.textContent = "";
  // todoList.textContent.trim();
  todoCompleted.textContent = "";
  todoData.forEach(function (item, i) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML =
      '<span class="text-todo">' +
      item.value +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      " </div>";
    if (item.сompleted) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    const todoComplete = li.querySelector(".todo-complete");
    todoComplete.addEventListener("click", function () {
      item.сompleted = !item.сompleted;
      localStorage.todoData = JSON.stringify(todoData);
      render();
    });
    const todoRemove = document.querySelector(".todo-remove");
    todoRemove.addEventListener("click", function () {
      todoData.splice(i, 1);
      render();
    });
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTodo = {
    value: headerInput.value,
    complted: false,
  };
  if (headerInput.value.trim() !== "") {
    todoData.push(newTodo);
    headerInput.value = "";
  } else {
    console.log("Пустой");
  }
  localStorage.todoData = JSON.stringify(todoData);
  render();
});
render();
