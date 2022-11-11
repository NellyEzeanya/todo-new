const form = document.getElementById("form");
const todo__list = document.getElementById("todo__list");

// function to delete todo
function deleteTodo() {
    // this - is a reference to the current object
    this.event.target.parentElement.parentElement.remove();
}

// function to edit todo
function editTodo() {
    const parent = this.event.target.parentElement.parentElement;
    const newValue = prompt("Enter New Value");
    parent.querySelector("span").innerHTML = newValue;
}

// function to add new todo
function addNewTodo(e) {
    e.preventDefault();
    const todoValue = e.target.elements.form_input.value
    e.target.elements.form_input.value = "";

    // create elements
    // append newly created element to the ul
    todo__list.innerHTML += `
        <li>
            <span>${todoValue}</span>
            <div>
            <button id="Edit" type="button" class="edit_btn" onclick="editTodo()">Edit</button>
            <button id="Delete" type="button" class="delete_btn" onclick="deleteTodo()">Delete</button>
            </div>
        </li>
    `;
}
form.addEventListener("submit", addNewTodo);




