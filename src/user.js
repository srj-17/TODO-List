import project from './project';

// we're assuming a single user todo app
const user = (function () {
    let projects = [];
    // todayTodos will always have id 999
    let todayTodos = new project(999, "todayTodo");
    
    let addTodayTodos = (title, description, duedate, priority, notes) => {
        return todayTodos.addTodo(title, description, duedate, priority, notes)
    }

    let getTodayTodos = () => todayTodos;

    function addProject(name) {
        let id = projects.length;
        
        let newProject = new project(id, name);
        projects.push(newProject);
    };

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

    return { addProject, 
        getProjects,
        getProject,
        addTodayTodos: addTodayTodos,
        getTodayTodos: getTodayTodos,
        deleteProject,
    };
}) ();

export default user;
