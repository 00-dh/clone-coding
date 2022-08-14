const toDoForm = document.querySelector(".todo_form");
const toDoInput = document.querySelector(".input_todo");
const toDoList = document.querySelector(".todo_list");
const toDoBtn = document.querySelector(".todo_button");
const emptyMessage = document.querySelector(".empty");

function todoBtnClick() {
  toDoList.classList.toggle("hidden");
}

toDoBtn.addEventListener("click", todoBtnClick);

let toDos = [];

if (toDos.length === 0) {
  emptyMessage.innerText = "Write your todo";
} else {
  emptyMessage.innerText = "Your Todo List";
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));

  if (toDos.length === 0) {
    emptyMessage.innerText = "Write your todo";
  } else {
    emptyMessage.innerText = "Your Todo List";
  }
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSumit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSumit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parseTodos = JSON.parse(savedTodos);
  toDos = parseTodos;
  parseTodos.forEach(paintToDo);
}
