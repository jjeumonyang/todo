const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) {
  const li = event.path[2];
  li.remove();

  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const btn = document.createElement("button");
  const trash = document.createElement("span");
  trash.className = "material-symbols-outlined";
  trash.innerText = "delete_sweep";
  btn.append(trash);
  trash.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  todos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (savedUsername === null) {
  toDoInput.classList.add("hidden");
  toDoList.classList.add("hidden");
} else {
  toDoInput.classList.remove("hidden");
  toDoList.classList.remove("hidden");
}
