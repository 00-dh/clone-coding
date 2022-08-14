const toDoForm = document.querySelector(".todo_form");
const toDoInput = document.querySelector(".input_todo");
const toDoList = document.querySelector(".todo_list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
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
  li.appendChild(button);
  li.appendChild(span);
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
