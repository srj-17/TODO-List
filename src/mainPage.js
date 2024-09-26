import tasks from "./user"

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

// TODO: REMOVE this innnerHTML: just for example
todayTasks.innerHTML = `
    <li class="task">
    <div class="task-title">some task</div>
    <div class="task-desc">Description of the task ...</div>
    <div class="task-duedate">2072-10-20</div>
    <div class="task-completion-status">
    <input type="checkbox" name="completed">
    </div>
    <div class="project-dropdown-btn">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M480-360 280-560h400L480-360Z"/></svg>
    </div>
    </li>
    <li class="task">
    <div class="task-title">some task</div>
    <div class="task-desc">Description of the task ...</div>
    <div class="task-duedate">2072-10-20</div>
    <div class="task-completion-status">
    <input type="checkbox" name="completed">
    </div>
    <div class="project-dropdown-btn">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M480-360 280-560h400L480-360Z"/></svg>
    </div>
    </li>
    <li class="task">
    <div class="task-title">some task</div>
    <div class="task-desc">Description of the task ...</div>
    <div class="task-duedate">2072-10-20</div>
    <div class="task-completion-status">
    <input type="checkbox" name="completed">
    </div>
    <div class="project-dropdown-btn">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M480-360 280-560h400L480-360Z"/></svg>
    </div>
    </li>
    <li class="task">
    <div class="task-title">some task</div>
    <div class="task-desc">Description of the task ...</div>
    <div class="task-duedate">2072-10-20</div>
    <div class="task-completion-status">
    <input type="checkbox" name="completed">
    </div>
    <div class="project-dropdown-btn">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M480-360 280-560h400L480-360Z"/></svg>
    </div>
    </li>
    `
todayTasksContainer.appendChild(todayTasks);

// add a add task button 
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
addProjectButtonContainer.classList.toggle("addProjectButton");
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

// get body of the current document, and attach the main elements to it
function renderMain() {
    let body = document.querySelector('body');

    // tasks
    body.appendChild(main);
};

export default { renderMain };
