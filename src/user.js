import project from './project';
import todo from './todo';

const user = (function () {
    let projects = [];
    let todayTodo = new project("todayTodo", 1, new Date());
    
    // if todos added at random (outside of projects), they're added to today todos
    // create a new todayTodo with a new date, transfer all of yesterday's todos
    // to today's todayTodo 
    // Do this each time DOM is loaded, or each time user log ins 
    // [we don't have login system yet], so we do the first method
    function updateTodayTodo() {
        if (!(todayTodo.dueDate === new Date())) {
            todayTodo.changeDueDate(new Date());

            // so that you don't have more than 20 items in your daily array
            todayTodo.todoList = todayTodo.todoList.slice(0, 20);
        } 
    }

    let addTodayTodo = (title, description, duedate, priority, notes, checklist) => {
        return todayTodo.addTodo(title, description, duedate, priority, notes, checklist)
    }

    let editTodayTodo = (id, title, description, duedate, priority, notes, checklist) => {
        return todayTodo.addTodo(id, title, description, duedate, priority, notes, checklist)
    }

    let getTodayTodos = () => todayTodo.getTodos();

    let deleteTodayTodo = (id) => todayTodo.deleteTodo(id);

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

    return { addProject, 
        getProjects,
        addTodayTodo,
        editTodayTodo,
        getTodayTodos,
        deleteTodayTodo,
    };
}) ();

export default user;
