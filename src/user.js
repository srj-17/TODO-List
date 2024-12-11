import project from './project';
import todo from './todo';

const user = (function () {
    let projects = [];
    let todayTodos = new project("todayTodo", 1, new Date());
    
    // if todos added at random (outside of projects), they're added to today todos
    // create a new todayTodo with a new date, transfer all of yesterday's todos
    // to today's todayTodo 
    // Do this each time DOM is loaded, or each time user log ins 
    // [we don't have login system yet], so we do the first method
    function updateTodayTodos() {
        if (!(todayTodos.dueDate === new Date())) {
            todayTodos.changeDueDate(new Date());

            // so that you don't have more than 20 items in your daily array
            todayTodos.todoList = todayTodos.todoList.slice(0, 20);
        } 
    }

    let addTodayTodos = (title, description, duedate, priority, notes, checklist) => {
        return todayTodos.addTodo(title, description, duedate, priority, notes, checklist)
    }

    let editTodayTodos = (id, title, description, duedate, priority, notes, checklist) => {
        return todayTodos.addTodo(id, title, description, duedate, priority, notes, checklist)
    }

    let getTodayTodos = () => todayTodos;

    let deleteTodayTodos = (id) => todayTodos.deleteTodo(id);

    function addProject(name, priority, duedate) {
        let newProject = new project(name, priority, duedate);
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
