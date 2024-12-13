import project from './project';

// we're assuming a single user todo app
const user = (function () {
    let projects = [];
    // todayTodos will always have id 999
    let todayTodos = new project(999, "todayTodo", 1, new Date());
    
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

    let addTodayTodos = (title, description, duedate, priority, notes) => {
        return todayTodos.addTodo(title, description, duedate, priority, notes)
    }

    let editTodayTodos = (id, title, description, duedate, priority, notes) => {
        return todayTodos.addTodo(id, title, description, duedate, priority, notes)
    }

    let getTodayTodos = () => todayTodos;

    let deleteTodayTodos = (id) => todayTodos.deleteTodo(id);

    function addProject(name, priority, duedate) {
        let temp = this.projects.at(-1);
        let id = this.projects.indexOf(temp) + 1;
        
        let newProject = new project(id, name, priority, duedate);
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
