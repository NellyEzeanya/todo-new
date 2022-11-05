const inputField = document.querySelector("#todo__input");
const todoValue = inputField.value;

const add_btn = document.getElementById("btn");


const edit_btn = document.getElementById("Edit");
edit_btn.addEventListener("click", editTodo);

const editTodo = document.getElementById("edit_btn");
editTodo.addEventListener("click", editTodo);

const delete_btn = document.getElementById("Delete");
delete_btn.addEventListener("click", deleteTodo);
const form = document.querySelectorAll(".form");


const listItem = document.querySelector("todo_input")

form.addEventListener("submit", (e) => {
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
    li.innerHTML+= `<button id="Edit" type="button" class="edit_btn">Edit</button>
    <button id="Delete" type="button" class="delete_btn">Delete</button>`
    //prepend is at the top, append is at the button
    listOfTodo.append(li)

}

//show the submition of my todo form, submit handler
//function showSubmitHandler(e){
  //  e.preventDefault()
    //const todo = inputField.value;
//}
//ADD EVENT LISTENER
//1. element that the event is happening to: addTodoForm
//2. call addEventListener PaymentMethodChangeEvent. experts two arguments
    //a. event you ar listening for: submit
    //b. function that will control what happens if the event happens.  A function that

addTodoForm.addEventListener("submit", showSubmitHandler);



function editTodo(){
    const editingTodo = editBtn.previousElementSibling
    // let todoBeingEdited = 
    const editTodo = inputField.value = editingTodo.innerText
    inputField.value 
}

addTodoForm.addEventListener("submit", submitHandler)

