import user from "./user.js";
import Project from "./project.js"

let localStorage = window["localStorage"];

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
        )
    }
}

function setProjects() {
    let localProjects = JSON.parse(localStorage.getItem("projects"));
    if (!localProjects) {
        storeProjectsLocally();
    } 

    let correctedLocProj = [];
    localProjects.forEach((project, index) => {
        let temp = new Project(index, project.name);

        let projectTodos = project.todoList;
        projectTodos.forEach(todo => {
            temp.addTodo(
                todo.title,
                todo.description,
                todo.dueDate,
                todo.priority,
                todo.notes
            );
        });
        correctedLocProj =  correctedLocProj.concat(temp);
    });
    user.setProjects(correctedLocProj);
}

function storeProjectsLocally() {
    if (storageAvailable("localStorage")) {
        // if there's no projects, creates it, else just updates it
        localStorage.setItem("projects", JSON.stringify(user.getProjects()));
    } else {
        console.log("LocalStorage Not available!")
    }
}

export default { 
    storeLocally: storeProjectsLocally,
    setProjects,
};
