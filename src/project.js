import todo from './todo';
//import domController from './domController.js';

class Project {
    constructor(id, name, priority) {
        this.id = id;
        this.name = name;

        // project priority is just for sorting, don't want any complications here, with todos also having priroty
        // priority starts with 0
        this.priority = priority;
        this.todoList = [];
    }
    
    // we're trusting valid todo to be provided. should we? YES Because we're creating a form in html # TODO
    addTodo(title, description, duedate, priority, notes) {
        // get the index of where new todo will go in the todo list, 
            // and that will be the id 
        // i.e. id = index of next todo  
        // but you'll need to a unique id for all todos in all projects, 
        // so you need to associate project id as well, I think
        // i.e. id = project id + index of next todo in project todo list
        let temp = this.todoList.at(-1);
        temp = this.todoList.indexOf(temp) + 1;
        let id = temp;

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
}

export default Project;
