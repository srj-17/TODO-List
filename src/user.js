import project from './project';
import todo from './todo';

const user = (function () {
    let projects = [];
    
    // if todos added at random (outside of projects), they're added to direct todos
    // not implemented as project object because it doesn't make sense doing that. 
    // it doesn't need priority or dueDate because it won't be displayed as project
    let directTodos = [];

    function addProject(name, priority, duedate) {
        let newProject = new project(name, priority, duedate);
        projects.push(newProject);
    };

    function getProjects() {
        return projects;
    }

    function addDirectTodo(title, description, duedate, priority, notes, checklist) {
        let newTodo = new todo(title, description, duedate, priority, notes, checklist);
        directTodos.push(newTodo);
    }

    function getDirectTodos() {
        return directTodos;
    }

    return { addProject, 
             addDirectTodo,
             getDirectTodos,
             getProjects };
}) ();

export default user;
