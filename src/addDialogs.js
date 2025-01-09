import user from "./user.js";
import mainPage from "./mainPage.js";
import projectPage from "./projectPage.js";

// ----- task form dialog -------- //
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
];

let addTaskFormHTML = ``;
addTaskFormElements.forEach((element) => {
    addTaskFormHTML = addTaskFormHTML + element;
});
addTaskForm.innerHTML = addTaskFormHTML;

let addTaskDialog = document.createElement("dialog");
addTaskDialog.classList.toggle("add-task-dialog");
addTaskDialog.classList.toggle("dialog");
addTaskDialog.appendChild(addTaskForm);

//configure cancel button to cancel the add todo task
let cancelTaskDialogButton = addTaskDialog.querySelector(
    ".dialog-buttons #cancel",
);
cancelTaskDialogButton.addEventListener("click", () => {
    if (addTaskDialog.hasAttribute("open")) {
        addTaskDialog.close();
    }
});

function clearForm(form) {
    let inputs = Array.from(form.querySelectorAll("input"));
    let textareas = Array.from(form.querySelectorAll("textarea"));
    let toClear = inputs.concat(textareas);

    toClear.forEach((inputField) => {
        inputField.value = "";
    });
}

// configure the add button to add todo task
let addTaskDialogButton = addTaskDialog.querySelector(".dialog-buttons #add");
addTaskDialogButton.addEventListener("click", (event) => {
    if (addTaskDialog.hasAttribute("open")) {
        let title = addTaskDialog.querySelector("input#title").value;
        let description = addTaskDialog.querySelector(
            "textarea#description",
        ).value;
        let dueDate = addTaskDialog.querySelector("input#duedate").value;
        let priority = addTaskDialog.querySelector("[name='priority']");
        let notes = addTaskDialog.querySelector("input#notes").value;

        // getting id and adding todo according to that id
        let projectId = addTaskDialog.id.split("-").at(0);

        if (projectId === "999") {
            user.getTodayTodos().addTodo(
                title,
                description,
                dueDate,
                priority,
                notes,
            );
            mainPage.renderTasks();
        } else {
            user.getProject(projectId).addTodo(
                title,
                description,
                dueDate,
                priority,
                notes,
            );

            // render the projects of id _ under the projects div
            let projects = document.querySelector(".projects");
            projectPage.renderProjectTasks(projectId, projects);
        }

        // locally store
        user.storeProjects();
        user.storeTodayTodos();

        // prevent the form from submitting, and instead just add the todos to the today's todo
        event.preventDefault();
        if (addTaskDialog.hasAttribute("open")) {
            clearForm(addTaskForm);
            addTaskDialog.close();
        }
    }
});

// ------- project form dialog ------- //
let addProjectForm = document.createElement("form");
addProjectForm.setAttribute("action", "/index.html");
addProjectForm.setAttribute("method", "get");

let addProjectFormElements = [
    `
    <div>
    <label class="to-bold" for="name">Name</label>
    <input type="text" id="name" placeholder="Project Name">
    </div>
    `,
    `
    <div class="dialog-buttons">
    <button type="submit" id="add">Add Project</button>
    <button type="button" id="cancel">Cancel</button>
    </div>
    `,
];

let addProjectFormHTML = ``;
addProjectFormElements.forEach((element) => {
    addProjectFormHTML = addProjectFormHTML + element;
});
addProjectForm.innerHTML = addProjectFormHTML;

let addProjectDialog = document.createElement("dialog");
addProjectDialog.classList.toggle("add-project-dialog");
addProjectDialog.classList.toggle("dialog");
addProjectDialog.appendChild(addProjectForm);

//configure cancel button to cancel the add todo task
let cancelProjectDialogButton = addProjectDialog.querySelector(
    ".dialog-buttons #cancel",
);
cancelProjectDialogButton.addEventListener("click", () => {
    if (addProjectDialog.hasAttribute("open")) {
        clearForm(addProjectForm);
        addProjectDialog.close();
    }
});

let addProjectDialogButton = addProjectDialog.querySelector(
    ".dialog-buttons #add",
);
addProjectDialogButton.addEventListener("click", (event) => {
    if (addProjectDialog.hasAttribute("open")) {
        let projectName = addProjectDialog.querySelector("#name").value;
        user.addProject(projectName);

        // update projects in the localstorage
        user.storeProjects();
        user.storeTodayTodos();

        // prevent the form from submitting, and instead just add the todos to the today's todo
        event.preventDefault();
        if (addProjectDialog.hasAttribute("open")) {
            clearForm(addProjectForm);
            addProjectDialog.close();
        }
    }
});

// ------------------ edit dialog ------------------------- //
let editTaskForm = document.createElement("form");
editTaskForm.setAttribute("action", "/index.html");
editTaskForm.setAttribute("method", "get");

let editTaskFormElements = [
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
    <button type="submit" id="edit">Edit</button>
    <button type="button" id="cancel">Cancel</button>
    </div>
    `,
];

let editTaskFormHTML = ``;
editTaskFormElements.forEach((element) => {
    editTaskFormHTML = editTaskFormHTML + element;
});
editTaskForm.innerHTML = editTaskFormHTML;

let editTaskDialog = document.createElement("dialog");
editTaskDialog.classList.toggle("edit-task-dialog");
editTaskDialog.classList.toggle("dialog");
editTaskDialog.appendChild(editTaskForm);

//configure cancel button to cancel the add todo task
let cancelEditTaskDialogButton = editTaskDialog.querySelector(
    ".dialog-buttons #cancel",
);
cancelEditTaskDialogButton.addEventListener("click", () => {
    if (editTaskDialog.hasAttribute("open")) {
        editTaskDialog.close();
    }
});

// configure the add button to add todo task
let editTaskDialogButton = editTaskDialog.querySelector(
    ".dialog-buttons #edit",
);
editTaskDialogButton.addEventListener("click", (event) => {
    if (editTaskDialog.hasAttribute("open")) {
        let title = editTaskDialog.querySelector("input#title").value;
        let description = editTaskDialog.querySelector(
            "textarea#description",
        ).value;
        let dueDate = editTaskDialog.querySelector("input#duedate").value;
        let priority = editTaskDialog.querySelector("[name='priority']");
        let notes = editTaskDialog.querySelector("input#notes").value;

        // getting id for project and todo and editing todo according to that id
        let projectId = editTaskDialog.id.split("-").at(0);
        let todoId = editTaskDialog.id.split("-").at(1);

        if (projectId === "999") {
            // i'm editing without providing the id, maybe that's a problem
            // yes! that's it... the actual function sees title as id, and so on
            // TODO: provide id for todos
            user.getTodayTodos().editTodo(
                todoId,
                title,
                description,
                dueDate,
                priority,
                notes,
            );
            mainPage.renderTasks();
        } else {
            user.getProject(projectId).editTodo(
                todoId,
                title,
                description,
                dueDate,
                priority,
                notes,
            );

            //render the projects of id _ under the projects div
            let projects = document.querySelector(".projects");
            projectPage.renderProjectTasks(projectId, projects);
        }

        user.storeProjects();
        user.storeTodayTodos();

        // prevent the form from submitting, and instead just add the todos to the today's todo
        event.preventDefault();
        if (editTaskDialog.hasAttribute("open")) {
            clearForm(editTaskForm);
            editTaskDialog.close();
        }
    }
});

// change the task dialog for the given project
// Question: does it change the dialog in dom as well? Do we need to render Again?
function changeTaskDialogFor(projectId, todoId) {
    addTaskDialog.id = projectId;

    // if there's todoId
    // we assume that's for editTodo dialog
    if (todoId) {
        editTaskDialog.id = `${projectId}-${todoId}`;
    }
}

export default {
    addTaskDialog,
    changeTaskDialogFor,
    addProjectDialog,
    editTaskDialog,
};
