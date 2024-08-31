import project from './project';
import todo from './todo';

const user = (function () {
    let projects = [];
    
    // if todos added at random (outside of projects), they're added to default project
    // it has no duedate since they're decided by the tasks
    // let defaultProject = (function () {
    //     let indexProject = new project("Index", 1);
    //     function addTodo(title, description, duedate, priority, notes, checklist) {
    //         indexProject.addTodo()
    //     }
    // }) ();
    let defaultProject = new project();

    function addProject(name, priority, duedate) {
        let newProject = new project(name, priority, duedate);
        projects.push(newProject);
    };

    return { addProject, addTodo: defaultProject.addTodo, projects };
}) ();

user.addProject("best world project", 1, "2011-10-1");