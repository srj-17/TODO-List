import project from "./project";
import localStorage from "./localStorage";

// we're assuming a single user todo app
const user = (function () {
  let projects = [];

  // todayTodos will always have id 999
  let todayTodos = new project(999, "todayTodo");

  let addTodayTodos = (title, description, duedate, priority, notes) => {
    return todayTodos.addTodo(title, description, duedate, priority, notes);
  };

  let getTodayTodos = () => todayTodos;

  function addProject(name) {
    let id = projects.length;

    let newProject = new project(id, name);
    projects.push(newProject);
  }

  function getProjects() {
    return projects;
  }

  function getProject(id) {
    return projects.at(id);
  }

  // TODO: id of projects should be updated after deleting in DOM
  function deleteProject(id) {
    let index = id;
    projects.splice(index, 1);

    // reset the ids
    projects.forEach((project, index) => {
      project.id = index;
    });
  }

  // for localStorage
  function setProjects(storedProjects) {
    projects = projects.concat(storedProjects);
  }

  function storeProjects() {
    localStorage.storeLocally();
  }

  function setTodayTodos(localTodos) {
    todayTodos = localTodos;
  }

  function storeTodayTodos() {
    localStorage.storeTodayTodos();
  }

  return {
    addProject,
    getProjects,
    getProject,
    addTodayTodos,
    getTodayTodos,
    deleteProject,
    setProjects,
    storeProjects,
    setTodayTodos,
    storeTodayTodos,
  };
})();

export default user;
