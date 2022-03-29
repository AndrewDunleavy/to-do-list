//variables
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list")

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteComplete);


//functions
function addTodo (event) {
    //prevents form from autosubmitting
    event.preventDefault();
    //create div
    if (todoInput !== ""){
    const todoDiv = document.createElement('div');
    //add class to div
    todoDiv.classList.add("todo");
    //create list item
    const newToDo = document.createElement("li");
    newToDo.innerText = todoInput.value;
    //add to do item class
    newToDo.classList.add("todo-item");
    //append list item to div
    todoDiv.appendChild(newToDo);
    //completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "completed";
    completedButton.classList.add("completed-button");
    todoDiv.appendChild(completedButton);
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "delete";
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton);
    //item to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";}
     else {alert("please enter a value")}
}
function deleteComplete(event) {
    const item = event.target;
    if (item.classList[0] === "delete-button") {
        const task = item.parentNode;
        task.remove();
        } 
    if (item.classList[0] === "completed-button") {
        const task = item.parentElement;
        task.classList.toggle("completed")
    }
    }