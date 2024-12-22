import user from "./user"
import addDialog from "./addDialogs";
import domController from "./domController";
import addDialogs from "./addDialogs";

let main = document.createElement("div");
main.classList.toggle("main");

let todayTasksContainer = document.createElement("div");
todayTasksContainer.classList.toggle("today-tasks-container");

let todayTasksHeader = `
    <div class="today-tasks-header">
        Today's Tasks
    </div>
    `;
todayTasksContainer.innerHTML = todayTasksHeader;


// adding today's tasks dynamically
let todayTasks = document.createElement("ul");
todayTasks.classList.toggle("today-tasks");
todayTasksContainer.appendChild(todayTasks);

// storing today's tasks
// decided to not show priority. 
    // That is implied by the ordering of todos
// TODO: maybe I can use the renderProjectTasks() from projectPage 
// for this purpose
function renderTasks() {
    let todayTodoList = user.getTodayTodos().getTodos();

    // empty the today's tasks and fill it back again
    todayTasks.innerHTML = ``

    let todayTasksHTML = ``
    todayTodoList.forEach(todo => {
        let todoItem = `
            <li class="todo" id="${user.getTodayTodos().id}-${todo.id}">
                <div class="todo-title">${todo.title}</div>
                <div class="todo-desc">${todo.description}</div>
                <div class="todo-duedate">${todo.duedate.toDateString()}</div>
                <div class="todo-completion-status">
                    <label for="complete"> Completed </label>
                    <input type="checkbox" id="complete" name="completed"  ${todo.status ? "checked" : "unchecked"}>
                </div>
                <div class="buttons">
                    <button class="delete-button">Delete</button>
                    <button class="edit-button">Edit</button>
                </div>
            </li>
            `
        todayTasksHTML = todayTasksHTML + todoItem;
    });
    todayTasks.innerHTML = todayTasksHTML;
}

let addTaskButtonContainer = document.createElement("div");
addTaskButtonContainer.classList.toggle("add-task-btn");

let addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add Task";
addTaskButtonContainer.appendChild(addTaskButton);

// append the task button
todayTasksContainer.appendChild(addTaskButtonContainer);

let projectsContainer= document.createElement("div");
projectsContainer.classList.toggle("highest-priority-projects-container");

// add the add New Project button
let addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add New Project";

let addProjectButtonContainer = document.createElement("div");
addProjectButtonContainer.classList.toggle("add-project-btn");
addProjectButtonContainer.appendChild(addProjectButton);

// add see all projects button
let seeAllProjectsButtonContainer = document.createElement("div");
seeAllProjectsButtonContainer.classList.toggle("see-all-projects-btn");

let seeAllProjectsButton = document.createElement("button");
seeAllProjectsButton.innerHTML = `
    <div class="text">See All Projects</div>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>
`;
seeAllProjectsButtonContainer.appendChild(seeAllProjectsButton);


main.appendChild(todayTasksContainer);
main.appendChild(projectsContainer);
main.appendChild(addProjectButtonContainer);
main.appendChild(seeAllProjectsButtonContainer);

// after adding all these, we have buttons
addTaskButton.addEventListener("click", () => {
    addDialog.addTaskDialog.showModal();
});

addProjectButton.addEventListener('click', () => {
    addDialog.addProjectDialog.showModal();
});

seeAllProjectsButton.addEventListener('click', () => {
    domController.renderProjects();
});

// for checkbox
todayTasks.addEventListener("click", (event) => {
    if (event.target.id === "complete") {
        let targetTodo = event.target.closest(".todo");
        let temp = targetTodo.id.split("-");
        let targetTodoId = temp[1];
        let targetTodoObject;

        // if I decide to later on use todayTodos as project
        //let targetProjectId = temp[0];
        //if (+targetProjectId === 999) {
        //    targetTodoObject = user.getTodayTodos().getTodos().at(targetTodoId);
        //} else {
        //    //for future reference: for other projects than todayTodos
        //    targetTodoObject = user.at(targetProjectId).getTodos().at(targetTodoId)                

        targetTodoObject = user.getTodayTodos().getTodos().at(targetTodoId);
        targetTodoObject.status = (targetTodoObject.status) ? false : true;
        console.log(targetTodoObject.status)
        console.log(document.querySelector("#complete"))
        renderTasks();
    }
});

// for edit and delete todo
todayTasks.addEventListener("click", (event) => {
    let classList = event.target.parentNode.classList;
    if (classList.contains("buttons")) {
        if (event.target.classList.contains("delete-button")) {
            let todoToDelete = event.target.closest(".todo");
            let id = todoToDelete.id.split("-").at(1);
            user.getTodayTodos().deleteTodo(id);
            renderTasks();
        } else if (event.target.classList.contains("edit-button")) {
            let todoToEdit = event.target.closest(".todo");
            let id = todoToEdit.id.split("-").at(1);

            addDialogs.changeTaskDialogFor("999", id);
            addDialogs.editTaskDialog.showModal();
        }
    } 
    });

// get body of the current document, and attach the main elements to it
function renderMain() {
    let body = document.querySelector('body');
    let removedProjects;

    // if no projects, returns null
    let projects = body.querySelector(".projects");
    if (projects) {
        removedProjects = body.removeChild(projects);
    }

    // tasks
    body.appendChild(main);

    // non-visible elements at the bottom
    body.appendChild(addDialog.addTaskDialog);

    body.appendChild(addDialog.editTaskDialog);

    // addDialogs is for the today's tasks on the mainpage
    addDialogs.changeTaskDialogFor("999");
    body.appendChild(addDialog.addProjectDialog);

    return removedProjects;
};

export default { renderMain, renderTasks };
