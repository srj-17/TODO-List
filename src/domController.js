import commonElements from "./commonElements.js"
import mainPageElements from "./mainPage.js"
import projectPageElements from "./projectPage"
import addDialog from "./addDialogs";


document.body.appendChild(addDialog.addTask);
document.body.appendChild(addDialog.addProject);


// these are executes immediately after the DOM has finished loading
let body = document.querySelector('body');

// render header inside (body), common for all elements
commonElements.renderHeader(body);

// render main page elements inside body
mainPageElements.renderMain(body);
