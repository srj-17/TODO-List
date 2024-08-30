import todo from './todo';

class Project {
    constructor(name, priority, dueDate) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate ? new Date(dueDate) : new Date();
        this.todo = [];
    }
    
    // we're trusting valid todo to be provided. should we? 
    addTodo(todo) {
        this.todo.push(todo);
    }
}

export default Project;