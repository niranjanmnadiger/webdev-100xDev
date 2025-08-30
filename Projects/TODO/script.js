let counter = 1; // tracks the number of todos added

// function to add todo
function addTodo() {
  const value = document.getElementById("ip1").value.trim(); // get value from input
  if (!value) return; // if input is empty, exit

  const newDiv = document.createElement("div"); // create a new div
  newDiv.setAttribute("id", counter); // set unique id for the todo

  // add todo content with delete and edit buttons
  newDiv.innerHTML = `
    <div>${counter}. ${value}</div>
    <button onclick="deleteTodo(${counter})">Delete</button>
    <button onclick="updateTodo(${counter})">Edit</button>
  `;

  document.getElementById("todo-container").appendChild(newDiv); // append todo to container
  document.getElementById("ip1").value = ""; // clear input box
  counter++; // increment counter
}

// function to delete todo
function deleteTodo(index) {
  const ele = document.getElementById(index); // get the element by its id
  if (ele) ele.remove(); // remove the element if it exists
}

// function to update todo
function updateTodo(index) {
  const value = document.getElementById("ip2").value.trim(); // get new text from edit input
  if (!value) return; // if empty, exit

  const ele = document.getElementById(index); // get the todo to be updated
  // update the todo with new text and buttons again
  ele.innerHTML = `
    <div>${index}. ${value}</div>
    <button onclick="deleteTodo(${index})">Delete</button>
    <button onclick="updateTodo(${index})">Edit</button>
  `;
}
