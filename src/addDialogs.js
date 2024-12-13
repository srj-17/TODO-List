import user from "./user.js";
import mainPage from "./mainPage.js";

let addTaskForm = document.createElement("form");
addTaskForm.setAttribute("action", "/index.html");
addTaskForm.setAttribute("method", "get");

let addTaskFormElements = [
    `
    <div>
        <label class="to-bold" for="title">Title</label>
        <input type="text" id="title" placeholder="Title">
    </div>
    `,
    `
    <div>
        <label class="to-bold" for="duedate">Due-Date</label>
        <input type="date" id="duedate" placeholder=${new Date()}>
    </div>
    `,
    `
    <div>
        <label class="to-bold" for="notes">Notes</label>
        <input type="text" id="notes" placeholder="notes">
    </div>
    `,
    `
    <div>
        <label class="to-bold" for="description">Description</label>
        <textarea id="description" placeholder="Todo description"></textarea>
    </div>
    `,
    `
    <fieldset class="priority">
        <legend class="to-bold">Priority</legend>
        <div>
            <input type="radio" id="high" name="priority" value="1">
            <label for="high">High</label>
        </div>
        <div>
            <input type="radio" id="medium" name="priority" value="2">
            <label for="medium">Medium</label>
        </div>
        <div>
            <input type="radio" id="low" name="priority" value="3">
            <label for="low">Low</label>
        </div>
    </fieldset>
    `,
    `
    <div class="dialog-buttons">
        <button type="submit" id="add">Add Todo</button>
        <button type="button" id="cancel">Cancel</button>
    </div>
    `,
]

let addTaskFormHTML = ``
addTaskFormElements.forEach(element => {
    addTaskFormHTML = addTaskFormHTML + element;
});
addTaskForm.innerHTML = addTaskFormHTML

let addTaskDialog = document.createElement("dialog");
addTaskDialog.classList.toggle("add-task-dialog");
addTaskDialog.appendChild(addTaskForm);

let addProject = document.createElement("dialog");
addProject.classList.toggle("add-project-dialog");

// //configure cancel button to cancel the add todo task
let cancelTaskDialogButton = addTaskDialog.querySelector(".dialog-buttons #cancel")
cancelTaskDialogButton.addEventListener("click", (event) => {
    if (addTaskDialog.hasAttribute("open")) {
        addTaskDialog.close()
    }
})

function clearForm() {
    let toClear = Array.from(addTaskForm.querySelectorAll("input"));
    toClear.forEach(inputField => {
        inputField.value = ""
    });
    console.log(toClear)
}

// configure the add button to add todo task
let addTaskDialogButton = addTaskDialog.querySelector(".dialog-buttons #add")
addTaskDialogButton.addEventListener("click", (event) => {
    if (addTaskDialog.hasAttribute("open")) {
        // TODO: add these attributes to the user.getTodayTodo().addTodo(...)
        let title = addTaskDialog.querySelector("input#title").value
        let description = addTaskDialog.querySelector("textarea#description").value
        let dueDate = addTaskDialog.querySelector("input#duedate").value
        let priority = addTaskDialog.querySelector("[name='priority']")
        let notes = addTaskDialog.querySelector("input#notes").value
        user.getTodayTodos().addTodo(title, description, dueDate, priority, notes)

        // prevent the form from submitting, and instead just add the todos to the today's todo
        event.preventDefault();
        if (addTaskDialog.hasAttribute("open")) {
            clearForm();
            addTaskDialog.close()
        }

        mainPage.renderTasks();
    }
});

export default { addTask: addTaskDialog, addProject };
