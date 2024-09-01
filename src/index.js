import user from './user';

user.addProject("best world project", 1, "2011-10-1");
user.addDirectTodo("hello", "this is the todo of todods", "2011-10-1", 1, "ok these are notes for this project", ['hello', 'these', 'are', 'things', 'to', 'do'])
setTimeout(() => {
    user.getDirectTodos().at(0).edit("bello", "this is the todo of todods", "2011-10-1", 1, "ok these are notes for this project", ['hello', 'these', 'are', 'things', 'to', 'do'])
}, 3000);
console.log(user.getDirectTodos());