import todo from './todo';
//import domController from './domController.js';

class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;

        this.todoList = [];
    }
    
    // we're trusting valid todo to be provided. should we? YES Because we're creating a form in html # TODO
    addTodo(title, description, duedate, priority, notes) {
        // get the index of where the next todo will goto
        let id = this.todoList.length;

        const newTodo = new todo(id, title, description, duedate, priority, notes);
        this.todoList.push(newTodo);
    }

    // get everything and only edit those that changed
    // TODO: search for the best way to edit and implement it here, use todo's edit or this type
    // this type is non-extendible cause you have to modify it 
    editTodo(id, title, description, duedate, priority, notes) {
        let index = id;
        let todoToEdit = this.todoList.at(index);
        todoToEdit.edit(title, description, duedate, priority, notes);
        //domController.render()
    }

    getTodos() {
        return this.todoList;
    }

    // Id's corresponding to where the projects are kept in this.todo list
    // as a consequence, the ids of all todos will be updated
    deleteTodo(id) {
        let index = id;
        this.todoList.splice(index, 1);
        //domController.render();
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}

export default Project;
