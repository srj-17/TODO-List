import project from './project';

// we're assuming a single user todo app
const user = (function () {
    let projects = [];
    // todayTodos will always have id 999
    let todayTodos = new project(999, "todayTodo");
    
    let addTodayTodos = (title, description, duedate, priority, notes) => {
        return todayTodos.addTodo(title, description, duedate, priority, notes)
    }

    let editTodayTodos = (id, title, description, duedate, priority, notes) => {
        return todayTodos.addTodo(id, title, description, duedate, priority, notes)
    }

    let getTodayTodos = () => todayTodos;

    let deleteTodayTodos = (id) => todayTodos.deleteTodo(id);

    function addProject(name) {
        let id = projects.length;
        
        let newProject = new project(id, name);
        projects.push(newProject);
    };

    function getProjects() {
        return projects;
    }

    // #TODO id of projects should be updated after deleting in DOM 
    function deleteProject(id) {
        let index = id;
        projects.splice(index, 1);
    }

    return { addProject, 
        getProjects,
        addTodayTodos: addTodayTodos,
        editTodayTodos: editTodayTodos,
        getTodayTodos: getTodayTodos,
        deleteTodayTodos: deleteTodayTodos,
    };
}) ();

export default user;
