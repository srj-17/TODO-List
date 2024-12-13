import user from "./user"
import addDialog from "./addDialogs";

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


// TODO: adding today's tasks dynamically
let todayTasks = document.createElement("ul");
todayTasks.classList.toggle("today-tasks");
todayTasksContainer.appendChild(todayTasks);

// storing today's tasks
// decided to not show priority. 
    // That is implied by the ordering of todos
function renderTasks() {
    let todayTodoList = user.getTodayTodos().getTodos();

    // empty the today's tasks and fill it back again
    todayTasks.innerHTML = ``

    let todayTasksHTML = ``
    todayTodoList.forEach(todo => {
        let todoItem = `
            <li class="task" id="${user.getTodayTodos().id}-${todo.id}">
                <div class="todo-title">${todo.title}</div>
                <div class="todo-desc">${todo.description}</div>
                <div class="todo-duedate">${todo.duedate}</div>
                <div class="todo-completion-status">
                    <input type="checkbox" id="${todo.status}" name="completed">
                </div>
                <!-- might remove this, complex, or use it for checklist instead -->
                <div class="project-dropdown-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M480-360 280-560h400L480-360Z"/></svg>
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


// TODO: add clickable dropdown to highest-priority-projects-container 
// to show some of its tasks  
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
    addDialog.addTask.showModal();
});

addProjectButton.addEventListener('click', () => {
    console.log("hello, project")
});

seeAllProjectsButton.addEventListener('click', () => {
    console.log("hello, allprojects")
});

// get body of the current document, and attach the main elements to it
function renderMain() {
    let body = document.querySelector('body');

    // tasks
    body.appendChild(main);

    // non-visible elements at the bottom
    document.body.appendChild(addDialog.addTask);
    document.body.appendChild(addDialog.addProject);
};

export default { renderMain, renderTasks };
