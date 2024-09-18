import user from './user';
import './styles.css'

user.addProject("best world project", 1, "2011-10-1");
user.addTodayTodo("hello", "this is the todo of todods", "2011-10-1", 1, "ok these are notes for this project", ['hello', 'these', 'are', 'things', 'to', 'do'])
setTimeout(() => {
    user.getTodayTodos().at(0).edit("bello", "this is the todo of todods", "2011-10-1", 1, "ok these are notes for this project", ['hello', 'these', 'are', 'things', 'to', 'do'])
}, 3000);   

// you might see differences in output, because in chrome devTools, the output of list
// changes based when you open it
// In this case, if it is opened before 3 seconds, it shows "hello" as title, else bello
console.log(user.getTodayTodos());
