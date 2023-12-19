import { createTodoItem ,createProject} from "./toDo";
function createToDo(title, description, dueDate, priority, notes, checklist) {
    const todoItem = createTodoItem(title, description, dueDate, priority, notes, checklist);
    return todoItem;
}
function createToDoProject(name, todoItems) {
    const project = createProject(name, todoItems);
    return project;
}
export default createToDoProject;
export {createToDo};