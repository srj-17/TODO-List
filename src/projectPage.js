import user from "./user";
import addDialogs from "./addDialogs";

let projects = document.createElement("div");
projects.classList.toggle("projects");

let projectsHeader = `
    <div class="projects-header">
        Projects
    </div>
`
projects.innerHTML = projectsHeader;

let projectsList = document.createElement("ul");
projectsList.classList.toggle("projects-list")
projects.appendChild(projectsList);

let projectsListsHTML = ``;
function renderProjects() {
    let userProjects = user.getProjects();
    userProjects.forEach(item => {
        let todoItem = `
            <li class="project" id="${item.id}">
                <div class="project-name">${item.name}</div>
            </li>
        `
        projectsListsHTML = projectsListsHTML + todoItem;
    });
    projectsList.innerHTML = projectsListsHTML;
}

// node = node to attach the rendered tasks on
function renderProjectTasks(id, node) {
    let targetProject = user.getProject(id);
    let targetProjectTasks = targetProject.getTodos();

    // adding `add task` button
    let addTaskButtonContainer = document.createElement("div");
    addTaskButtonContainer.classList.toggle("add-task-button-container");
    let addTaskButton = document.createElement("button");
    addTaskButton.classList.toggle("add-task-button");
    addTaskButton.textContent = "Add Task";
    addTaskButtonContainer.appendChild(addTaskButton);

    // adding todos themselves
    let todosHTML = ``
    targetProjectTasks.forEach(todo => {
        let todoItem = `
            <li class="todo" id="${id}-${todo.id}">
                <div class="todo-title">${todo.title}</div>
                <div class="todo-desc">${todo.description}</div>
                <div class="todo-duedate">${todo.duedate.toDateString()}</div>
                <div class="todo-completion-status">
                    <label for="complete"> Completed </label>
                    <input type="checkbox" id="complete" name="completed"  ${todo.status ? "checked" : "unchecked"}>
                <div class="buttons">
                    <button class="delete-button">Delete</button>
                    <button class="edit-button">Edit</button>
                </div>
            </li>
            `
        todosHTML = todosHTML + todoItem;
    });

    let projectTasks = document.createElement("ul");
    projectTasks.classList.toggle("project-tasks");
    projectTasks.innerHTML = todosHTML;
    
    // removing previous task and add-button nodes (if any)
    let previousProjectTasks = node.querySelector(".project-tasks");
    let previousAddTask = node.querySelector(".add-task-button-container");
    if (previousProjectTasks || previousAddTask) {
        node.removeChild(previousProjectTasks);
        node.removeChild(previousAddTask);
    }

    // appending the tasks and add-button nodes that are created at this moment
    node.appendChild(projectTasks);
    node.appendChild(addTaskButtonContainer);

    addTaskButton.addEventListener("click", () => {
        addDialogs.addTaskDialog.show();
    });
}

function configureButtons(id, node) {
    let targetProject = user.getProject(id);

    // configuring the delete todo button
    // configuring the edit todo button
    node.addEventListener("click", (event) => {
        let classList = event.target.parentNode.classList;
        if (classList.contains("buttons")) {
            if (event.target.classList.contains("delete-button")) {
                let todoToDelete = event.target.closest(".todo");
                let id = todoToDelete.id.split("-").at(1);
                targetProject.deleteTodo(id)
                renderProjectTasks();
            } else if (event.target.classList.contains("edit-button")) {
                let todoToEdit = event.target.closest(".todo");
                let id = todoToEdit.id.split("-").at(1);
                // TODO: I think I'll need a new dialog, an EditDialog for this one
                    // based on the addDialog because I'll have to use it later
                    // for the todayTodos as well
                // addDialogs.changeTaskDialogFor(id);
                // addDialogs.addTaskDialog.showModal();
            }
        } 
    });
}

// returns removedMain if there's main, else returns null
function renderProjectPage() {
    let body = document.querySelector("body");

    let main = document.querySelector(".main");
    let removedMain;
    if (main) {
        removedMain = body.removeChild(main)
    }

    renderProjects();

    projectsList.addEventListener("click", (event) => {
        let projectId = event.target.parentElement.id;

        renderProjectTasks(projectId, projects);
        configureButtons(projectId, projects);
        addDialogs.changeTaskDialogFor(projectId);
    });

    body.appendChild(projects);

    return removedMain;
}

export default { renderProjectPage, renderProjectTasks };
