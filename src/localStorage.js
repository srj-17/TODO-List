import user from "./user.js";
import Project from "./project.js";

const localStorage = window["localStorage"];

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}

function setProjects() {
  const localProjects = JSON.parse(localStorage.getItem("projects"));
  if (!localProjects) {
    storeProjectsLocally();
  } else {
    let correctedLocProj = [];
    localProjects.forEach((project, index) => {
      const temp = new Project(index, project.name);

      let projectTodos = project.todoList;
      projectTodos.forEach((todo) => {
        temp.addTodo(
          todo.title,
          todo.description,
          todo.dueDate,
          todo.priority,
          todo.notes,
        );
      });
      correctedLocProj = correctedLocProj.concat(temp);
    });

    user.setProjects(correctedLocProj);
  }
}

function setTodayTodos() {
  const localTodayTodos = JSON.parse(localStorage.getItem("todayTodos"));
  if (!localTodayTodos) {
    storeTodayTodosLocally();
  } else {
    const todayProject = new Project("999", "todayTodos");
    localTodayTodos.forEach((todo) => {
      todayProject.addTodo(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.notes,
      );
    });

    user.setTodayTodos(todayProject);
  }
}

function storeTodayTodosLocally() {
  if (storageAvailable("localStorage")) {
    localStorage.setItem(
      "todayTodos",
      JSON.stringify(user.getTodayTodos().getTodos()),
    );
  } else {
    console.log("LocalStorage Not available!");
  }
}

function storeProjectsLocally() {
  if (storageAvailable("localStorage")) {
    // if there's no projects, creates it, else just updates it
    localStorage.setItem("projects", JSON.stringify(user.getProjects()));
  } else {
    console.log("LocalStorage Not available!");
  }
}

export default {
  storeLocally: storeProjectsLocally,
  setProjects,
  setTodayTodos,
  storeTodayTodos: storeTodayTodosLocally,
};
