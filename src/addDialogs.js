import project from "./project.js";

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
    <fieldset>
        <legend class="to-bold">Checklist</legend>
        <div>
            <label for="example">Example</label>
            <input type="checkbox" id="checklist" name="checklist">
        </div>
        <div>
            <label for="checklist">Sub-todos</label>
            <input type="checkbox" id="checklist" name="checklist">
        </div>
    </fieldset>
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

// TODO: remove this. this is just for first demo, 
    // also, add the checklists and priority dynamically later on
let addTaskFormHTML = ``
addTaskFormElements.forEach(element => {
    addTaskFormHTML = addTaskFormHTML + element
});
addTaskForm.innerHTML = addTaskFormHTML

let addTask = document.createElement("dialog");
addTask.classList.toggle("add-task-dialog");
addTask.appendChild(addTaskForm);

let addProject = document.createElement("dialog");
addProject.classList.toggle("add-project-dialog");

// //configure cancel button to cancel the add todo task
let cancelTaskDialogButton = addTask.querySelector(".dialog-buttons #cancel")
cancelTaskDialogButton.addEventListener("click", (event) => {
    if (addTask.hasAttribute("open")) {
        addTask.close()
    }
})

// configure the add button to add todo task
let addTaskDialogButton = addTask.querySelector(".dialog-buttons #add")
addTaskDialogButton.addEventListener("click", (event) => {
    if (addTask.hasAttribute("open")) {
        // addTodo(title, description, duedate, priority, notes, checklist) {
            // TODO: add these attributes to the user.getTodayTodo().addTodo(...)
        let title = addTask.querySelector("input#title").value
        let description = addTask.querySelector("textarea#description").value
        let dueDate = addTask.querySelector("input#duedate").value
        let notes = addTask.querySelector("input#notes").value
        let checklist = null
        
        project.addTodo()
    }
})

export default { addTask, addProject };
