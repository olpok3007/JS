"use strict";

/////////////////////////////////
const p1 = document.querySelector(".p1");

const inp = document.createElement("input");
inp.classList.add("input");
inp.textContent = "GOOOOOO";
inp.setAttribute("type", "text");
inp.setAttribute("name", "GO");
p1.prepend(inp);

function getTarget(e) {
  console.log(e.target);
}

// document.body.onclick = function (e) {
//   console.log(e);
// };

inp.addEventListener("click", getTarget);

////////////////////////////////////////

// const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const btn_add = document.querySelector(".btn_add");
const btn_delete = document.querySelector(".btn_delete");
const input_text = document.querySelector("#input_text");

function getUserText(e) {
  let value = prompt("Input your task!!!");
  console.log(e.target);
  p2.textContent = value;
}

function deleteUserText() {
  btn_delete.remove();
  p2.remove();
}

btn_add.addEventListener("click", getUserText);
btn_delete.addEventListener("click", deleteUserText);

/////////////////////////////
/*
  створити базовий todo-list
  по натисканню на кнопку запитати у користувача задачу
  потім створити елменент з текстом задачі і розмістити його на сторінці
  * поруч з текстом задачі розмістит кнопку delete
    при натисканні на неї видалити задачу і кнопку
*/

const addTask = document.querySelector(".question-btn");
const todoList = document.querySelector(".todo-list");
// const deleteBtn = document.querySelector('.btn');

function deleteHandler(event) {
  event.target.parentElement.remove();
}

addTask.addEventListener("click", function () {
  const newTask = prompt("Write new task");

  if (newTask === "") {
    alert("Write something");
    return;
  }

  const newSection = document.createElement("li");
  newSection.classList.add("section-question");

  const newButtonDelete = document.createElement("button");
  newButtonDelete.classList.add("btn");
  newButtonDelete.innerText = "Delete";
  newButtonDelete.addEventListener("click", deleteHandler);

  const newElem = document.createElement("p");
  newElem.textContent = newTask;
  newElem.classList.add("text");

  newSection.append(newElem, newButtonDelete);
  todoList.append(newSection);
});
