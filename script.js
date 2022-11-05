const inputField = document.querySelector("#todo__input");
const todoValue = inputField.value;

const add_btn = document.getElementById("btn");


const edit_btn = document.getElementById("Edit");
edit_btn.addEventListener("click", editTodo);

const editTodo = document.getElementById("edit_btn");
editTodo.addEventListener("click", editTodo);

const delete_btn = document.getElementById("Delete");
delete_btn.addEventListener("click", deleteTodo);


const li = document.querySelector("#todo_input")

add_btn.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    showTodoOnTheScreen(todoValue);
    inputField.value = ""
})

function showTodoOnTheScreen(todo) {
    const listOfTodo = document.querySelector("#todo__list");
    const li = document.createElement("li");
    li.classList.add("todo__section--todoItem");
    console.log(li);
    li.innerText = todo;
    listOfTodo.append(li)

}

