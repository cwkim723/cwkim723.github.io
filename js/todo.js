const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const comToDoList = document.getElementById("com-list");

const TODOS_KEY = "todos";
const COM_TODOS_KEY = "completeToDos";

let toDos = [];
let completeToDos = [];

function handleToDoSubmit(event) {
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
  
toDoForm.addEventListener("submit", handleToDoSubmit);

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.style.marginRight = "10px";
  const delButton = document.createElement("button");
  delButton.innerText = "❌";
  delButton.style.backgroundColor = 'transparent';
  delButton.style.borderColor = 'transparent';
  const checkButton = document.createElement("button");
  checkButton.innerText = "✔️";
  checkButton.style.backgroundColor = 'transparent';
  checkButton.style.borderColor = 'transparent';
  delButton.addEventListener("click", deleteToDo);
  checkButton.addEventListener("click", completeToDo);

  li.appendChild(span);
  li.appendChild(delButton);
  li.appendChild(checkButton);
  toDoList.appendChild(li);
}

function paintCompleteToDo(comTodoObj) {
    const li = document.createElement("li");
    li.id = comTodoObj.id;
  
    const span = document.createElement("span");
    span.innerText = comTodoObj.text;
    span.style.marginRight = "10px";
    const delButton = document.createElement("button");
    delButton.innerText = "❌";
    delButton.style.backgroundColor = 'transparent';
    delButton.style.borderColor = 'transparent';
    delButton.addEventListener("click", deleteComToDo);
  
    li.appendChild(span);
    li.appendChild(delButton);
    comToDoList.appendChild(li);
  }

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveCompleteToDos() {
    localStorage.setItem(COM_TODOS_KEY, JSON.stringify(completeToDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
  saveToDos();
}

function deleteComToDo(event) {
    console.log('들어옴영')
    const li = event.target.parentElement;
    li.remove();
    completeToDos = completeToDos.filter((completeToDos) => completeToDos.id !== parseInt(li.id));
    saveCompleteToDos();
  }

function completeToDo(event){
    const comTodo = event.target.parentElement.firstElementChild.innerText;
    const comTodoObj = {
      text: comTodo,
      id: Date.now(),
    };
    completeToDos.push(comTodoObj);
    saveCompleteToDos();
    
    
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();

    paintCompleteToDo(comTodoObj);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log('savedToDos', savedToDos)
const savedComToDos = localStorage.getItem(COM_TODOS_KEY);
console.log('savedComToDos', savedComToDos)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log('parsedToDos', parsedToDos)
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
if (savedComToDos !== null){
  const parsedComToDos = JSON.parse(savedComToDos);
  console.log('parsedComToDos', parsedComToDos)
  completeToDos = parsedComToDos;
  parsedComToDos.forEach(paintCompleteToDo);
}