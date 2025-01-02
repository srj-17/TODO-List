import mainPageElements from "./mainPage.js";
import projectPage from "./projectPage.js";
import commonElements from "./commonElements.js";
import localStorage from "./localStorage.js";

const domController = (function () {
  // these are executes immediately after the DOM has finished loading
  let body = document.querySelector("body");

  // set up from localStorage
  localStorage.setProjects();
  localStorage.setTodayTodos();

  // render header inside (body), common for all elements
  commonElements.renderHeader(body);

  let removedMain;
  function renderMainPage() {
    // render main page elements inside body
    mainPageElements.renderMain();
  }

  function renderProjectPage() {
    removedMain = projectPage.renderProjectPage();
  }

  return { renderMain: renderMainPage, renderProjects: renderProjectPage };
})();

export default domController;
