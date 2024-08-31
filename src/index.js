import project from './project';

const user = (function () {
    let projects = [];
    
    // if todos added at random (outside of projects), they're added to default project (indexTodos)
    let directTodos = new project();

    function addProject(name, priority, duedate) {
        let newProject = new project(name, priority, duedate);
        projects.push(newProject);
    };

    function getProjects() {
        return projects;
    }

    return { addProject, addTodo: directTodos.addTodo, getProjects };
}) ();

user.addProject("best world project", 1, "2011-10-1");