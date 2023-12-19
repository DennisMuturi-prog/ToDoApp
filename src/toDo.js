// Factory function to create todo items
export function createTodoItem(title, description, dueDate, priority, notes, checklist) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
        complete: false, // Added complete status property
        addItemToChecklist: function(item) {
            this.checklist.push(item);
        },
        removeItemFromChecklist: function(item) {
            const index = this.checklist.indexOf(item);
            if (index !== -1) {
                this.checklist.splice(index, 1);
            }
        }
    };
}

// Create a todo item using the factory function
const todoItem = createTodoItem(
    "Code repo in GitHub",
    "Complete the final tasks for the project",
    "2022-12-31",
    "low",
    "Remember to test the code thoroughly",
    ["Task 1", "Task 2", "Task 3"]
);
const todoItem1 = createTodoItem(
    "Science fair",
    "Complete the hydrogen project",
    "2023-12-31",
    "high",
    "Remember to test the fusion reaction thoroughly",
    ["hydrogen collection", "burning", "fusion"]
);
// Factory function to create project objects
export function createProject(name, todoItems) {
    return {
        name,
        todoItems,
        addTodo: function(todo) {
            this.todoItems.push(todo);
        },
        removeTodo: function(todo) {
            const index = this.todoItems.indexOf(todo);
            if (index !== -1) {
                this.todoItems.splice(index, 1);
            }
        }
    };
}

// Create a project object using the factory function
const project = createProject("Project Summer", []);
export default project;

// Add a todo item to the project
project.addTodo(todoItem);
project.addTodo(todoItem1);
todoItem.addItemToChecklist("Task 4");
todoItem.removeItemFromChecklist("Task 2");

