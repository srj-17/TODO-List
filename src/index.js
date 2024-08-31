import project from './project';

const user = (function () {
    let projects = [];
    
    // if todos added at random (outside of projects), they're added to default project (directTodos)
    let directTodos = new project("Direct Todos", 1);
    directTodos.addTodo("hello", "this is the todo of todods", "2011-10-1", 1, "ok these are notes for this project", ['hello', 'these', 'are', 'things', 'to', 'do'])
    console.log(directTodos);

    function addProject(name, priority, duedate) {
        let newProject = new project(name, priority, duedate);
        projects.push(newProject);
    };

    function getProjects() {
        return projects;
    }

    return { addProject, 
             addTodo: () => directTodos.addTodo(), 
             getDirectTodos: () => directTodos.getTodos(), 
             getProjects };
}) ();

user.addProject("best world project", 1, "2011-10-1");
console.log(user.getProjects());

console.log(user.addTodo())