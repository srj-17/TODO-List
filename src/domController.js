import commonElements from "./commonElements.js"
import mainPageElements from "./mainPage.js"
import projectPageElements from "./projectPage"

// these are executes immediately after the DOM has finished loading
let body = document.querySelector('body');

// render header inside (body), common for all elements
commonElements.renderHeader(body);

// render main page elements inside body
mainPageElements.renderMain(body);

// after rendering, our main has buttons
let addTaskButton = document.querySelector(".add-task-btn button");

let addProjectButton = document.querySelector(".add-project-btn button");

let seeAllProjectsButton = document.querySelector(".see-all-projects-btn button");

addTaskButton.addEventListener("click", () => {
    console.log("hello, task")
});

addProjectButton.addEventListener('click', () => {
    console.log("hello, project")
});

seeAllProjectsButton.addEventListener('click', () => {
    console.log("hello, allprojects")
});
