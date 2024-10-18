let addTask = document.createElement("dialog");
let addTaskForm = document.createElement("form");


addTask.classList.toggle("add-task-dialog");

let addProject = document.createElement("dialog");
addProject.classList.toggle("add-project-dialog");


export default { addTask, addProject };
