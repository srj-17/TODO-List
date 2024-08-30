import project from './project';

const user = (function () {
    let projects = [];
    function addProject(name, priority, duedate) {
        let newProject = new project(name, priority, duedate);
        projects.push(newProject);
    };

    return {addProject, projects};
}) ();

user.addProject("best world project", 1, "2011-10-1");