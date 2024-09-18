import project from './project';
import todo from './todo';

const user = (function () {
    let projects = [];
    let todayTodo;
    
    // if todos added at random (outside of projects), they're added to today todos
    // create a new todayTodo with a new date, transfer all of yesterday's todos
    // to today's todayTodo
    function createTodayTodo() {
        if (!(todayTodo.dueDate === new Date())) {
            let tempTodo = todayTodo;
            todayTodo = new Project("todayTodo", 1, new Date());
            todayTodo.todoList = todayTodo.todoList.concat(tempTodo.todoList);
        } 
    }

    function addProject(name, priority, duedate) {
        let newProject = new project(name, priority, duedate);
        projects.push(newProject);
    };

    function getProjects() {
        return projects;
    }

    // id of projects should be updated after deleting in DOM #TODO
    function deleteProject(id) {
        let index = id;
        projects.splice(index, 1);
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
