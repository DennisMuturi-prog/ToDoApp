import { getPriorityColor,editDialog,setProjectIndex,setTodoIndex} from "./toDoGUI";
export const mainContentDiv = document.querySelector('.content');
export function createToday() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const date = new Date();
    const today = date.toISOString().slice(0, 10);
    const todayItems = [];

    projects.forEach((project,projectIndex) => {
        project.todoItems.forEach((todo,todoIndex) => {
            if (todo.dueDate === today) {
                todo.projectIndex = projectIndex;
                todo.todoIndex = todoIndex;
                todayItems.push(todo);
            }
        });
    });
    if(todayItems.length===0){
        mainContentDiv.textContent="No tasks for today";
    }
    else{
        mainContentDiv.appendChild(renderToday(todayItems));

    } 

    // Use the todayItems array as needed
}
export function renderToday(todayTodos) {
    const ProjectsDiv = document.createElement('div');
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectpanelselected');
        const todoList = document.createElement('ul');

        todayTodos.forEach((item, todoIndex) => {
            const todoItem = document.createElement('li');
            const todoTitle = document.createElement('span');
            const todoDueDate = document.createElement('span');
            const priorityCircle = document.createElement('div'); // Create the circle element

            todoTitle.textContent = item.title;
            todoDueDate.textContent = ` - Due Date: ${item.dueDate}`;

            // Set the color of the circle based on priority
            priorityCircle.style.backgroundColor = getPriorityColor(item.priority);
            priorityCircle.style.width = '10px';
            priorityCircle.style.height = '10px';
            priorityCircle.style.borderRadius = '50%';
            priorityCircle.style.display = 'inline-block';

            // Set the data attribute with project and todo item indices
            todoItem.setAttribute('data-project-todo', `${item.projectIndex}-${item.todoIndex}`);
            todoItem.addEventListener('click', () => {
                todoItem.classList.toggle('expanded');
        
                if (todoItem.classList.contains('expanded')) {;
                    const todoDetailsDiv = createToDoDetailsDiv(item);
                    todoItem.appendChild(todoDetailsDiv);
                } else {
                    const todoDetailsDiv = todoItem.querySelector('.todo-details');
                    if (todoDetailsDiv) {
                        todoDetailsDiv.remove();
                    }
                }
            });

            todoItem.appendChild(priorityCircle); // Add the circle element to the todo item
            todoItem.appendChild(todoTitle);
            todoItem.appendChild(todoDueDate);
            todoList.appendChild(todoItem);
        });
        projectDiv.appendChild(todoList);
        ProjectsDiv.appendChild(projectDiv);

    return ProjectsDiv;
}
function createToDoDetailsDiv(item) {
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('todo-details');

    const titleElement = document.createElement('h2');
    titleElement.textContent = item.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = item.description;

    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due Date: ${item.dueDate}`;

    const priorityElement = document.createElement('p');
    priorityElement.textContent = `Priority: ${item.priority}`;

    const tasksHeadingElement = document.createElement('h3');
    tasksHeadingElement.textContent = 'Tasks';

    const tasksElement = document.createElement('ul');
    item.checklist.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task;
        tasksElement.appendChild(taskElement);
    });

    const notesHeadingElement = document.createElement('h3');
    notesHeadingElement.textContent = 'Notes';

    const notesElement = document.createElement('p');
    notesElement.textContent = item.notes;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', (event) => {
        // Handle edit functionality here
        editDialog.showModal();

        // Get the parent li element
        const parentLi = event.target.closest('li');

        // Get the data-todo-project attribute value
        const todoProject = parentLi.getAttribute('data-project-todo').split('-').map(Number);
        setProjectIndex(todoProject[0]);
        setTodoIndex(todoProject[1]);
        const title = item.title;
        const description = item.description;
        const dueDate = item.dueDate;
        const priority = item.priority;
        const checklist = item.checklist;
        const notes = item.notes;

        // Join the checklist array with a comma and a new line
        const checklistText = checklist.join(',\n');

        // Populate the form values in the edit to-do dialog
        document.querySelector('#edit-todo-title').value = title;
        document.querySelector('#edit-todo-description').value = description;
        document.querySelector('#edit-todo-due-date').value = dueDate;
        document.querySelector('#edit-todo-priority').value = priority;
        document.querySelector('#edit-todo-tasks').value = checklistText;
        document.querySelector('#edit-todo-notes').value = notes;
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        // Handle delete functionality here
        const parentLi = event.target.closest('li');
        const todoProject = parentLi.getAttribute('data-project-todo').split('-').map(Number);
        const projectIndex = todoProject[0];
        const todoIndex = todoProject[1];
        
        // Remove the todo item from the project
        const projects = JSON.parse(localStorage.getItem('projects'));
        projects[projectIndex].todoItems.splice(todoIndex, 1);
        mainContentDiv.innerHTML="";
        localStorage.setItem('projects',JSON.stringify(projects));
        createToday();
        
    });

    detailsDiv.appendChild(titleElement);
    detailsDiv.appendChild(descriptionElement);
    detailsDiv.appendChild(dueDateElement);
    detailsDiv.appendChild(priorityElement);
    detailsDiv.appendChild(tasksHeadingElement);
    detailsDiv.appendChild(tasksElement);
    detailsDiv.appendChild(notesHeadingElement);
    detailsDiv.appendChild(notesElement);
    detailsDiv.appendChild(editButton);
    detailsDiv.appendChild(deleteButton);

    return detailsDiv;
}

