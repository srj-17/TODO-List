import mainPageElements from "./mainPage.js"
import projectPage from "./projectPage.js";
import commonElements from "./commonElements.js";

const domController = (function () {
    // these are executes immediately after the DOM has finished loading
    let body = document.querySelector('body');
    let main = document.querySelector('.main');
    let projects = document.querySelector('.projects');

    // render header inside (body), common for all elements
    commonElements.renderHeader(body);

    let removedMain;
    let removedProjects;

    // replace the projects div with main
        // if main already exists i.e. user clicked on main from somewhere
            // render the removed main
        // else, 
            // render the main with logic from mainPageElements
    // looks like this only makes the logic more complex
        // when user clicks back button from projects page, the page is reloded
        // anyways, so, the removedMain and removedProjects are cleaned
    function renderMainPage() {
        // render main page elements inside body
        if (removedMain) {
            removedProjects = body.removeChild(projects);
            body.appendChild(removedMain);
        } else {
            removedProjects = mainPageElements.renderMain(body);
        }
    }

    function renderProjectPage() {
        if (removedProjects) {
            removedMain = body.removeChild(main);
            body.appendChild(removedProjects);
        } else {
            removedMain = projectPage.renderProjectPage();
        }
    }
    
    return { renderMain: renderMainPage, renderProjects: renderProjectPage };
}) ();

export default domController;
