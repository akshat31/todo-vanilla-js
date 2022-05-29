// constants
const todoArray = [
  {
    name: "Welcome To TODO",
    isCompleted: false,
    id: 0,
  },
];
const listElem = document.getElementById("todoList");
const inputElem = document.getElementById("todoInput");

// Intilise
todoArray.forEach((val) => {
  listElem.appendChild(createListItem(val));
});

function handleDelete(event) {
  const index = todoArray.indexOf(event);
  if (index > -1) {
    todoArray.splice(index, 1);
  }
  listElem.innerHTML = "";
  todoArray.forEach((val) => {
    listElem.appendChild(createListItem(val));
  });
}

function createListItem(todoData) {
  const li = document.createElement("li");
  const spanNode = document.createElement("span");
  const btnNode = document.createElement("button");
  let toggleColor = true;
  btnNode.innerText = "X";
  btnNode.className = "btn-delete";
  btnNode.onclick = function () {
    handleDelete(todoData);
  };
  spanNode.textContent = todoData.name;
  li.style.backgroundColor = todoData.isCompleted ? '#01ff01' : 'white';
  li.style.textDecoration = todoData.isCompleted ? 'line-through' : 'none';
  li.onclick = function () {
    if (toggleColor) {
      li.style.backgroundColor = "#01ff01";
      li.style.textDecoration = "line-through";
      toggleColor = false;
    } else {
      li.style.backgroundColor = "white";
      li.style.textDecoration = "none";
      toggleColor = true;
    }
  };
  li.appendChild(spanNode);
  li.appendChild(btnNode);
  return li;
}

function handleSubmit(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  const todoVal = {
    name: inputElem.value || "test",
    isCompleted: false,
    id: todoArray.length !== 0 ? todoArray[todoArray.length - 1].id + 1 : 0,
  };
  todoArray.push(todoVal);
  inputElem.value = "";
  listElem.appendChild(createListItem(todoVal));
}
