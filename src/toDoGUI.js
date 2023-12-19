import project from "./toDo";
import './todo.css';
import { addbtn } from "./collectData";
import createToDoProject, { createToDo} from "./createToDoTask";
import { createToday } from "./today";
import { createThisWeek } from "./thisweek";
import { recreateProjects } from "./projectsRecreation";
import { createTrash } from "./trash";
export let projects=[];
projects.push(project);
projects.push(createToDoProject("My Project",[createToDo(
    "Military gadget upgrade",
    "Modify the military gadget to be more powerful",
    "2022-12-30",
    "medium",
    "The gadget is used to detect the enemy's position and attack them",
    ["test ballistics", "missile precision upgrade", "Test the gadget in the field"]
)]));
let projects_serialized = JSON.stringify(projects);
if (!localStorage.getItem("projects")) {
    localStorage.setItem("projects", projects_serialized);
}
else{
   projects=getprojectsFromLocalStorage();
}
export const contentDiv = document.querySelector('.projects');
const toDoDialog=document.querySelector('#todo-dialog');
export const editDialog=document.querySelector('#edit-todo-dialog');
export let projectIndexer;
export function renderProjects(projects) {
    const ProjectsDiv = document.createElement('div');
    projects.forEach((project, projectIndex) => {
        const projectDiv = document.createElement('div');
        const h1Element = document.createElement('h1');
        const todoList = document.createElement('ul');

        h1Element.textContent = project.name;

        project.todoItems.forEach((item, todoIndex) => {
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
            todoItem.setAttribute('data-project-todo', `${projectIndex}-${todoIndex}`);
            todoItem.addEventListener('click', () => {
                todoItem.classList.toggle('expanded');
        
                if (todoItem.classList.contains('expanded')) {
                    const indexArray = todoItem.getAttribute('data-project-todo').split('-').map(Number);
                    const todoDetailsDiv = createToDoDetailsDiv(getprojectsFromLocalStorage()[indexArray[0]].todoItems[indexArray[1]]);
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

        projectDiv.appendChild(h1Element);
        projectDiv.appendChild(todoList);

        // Create the add button
        const addButton = document.createElement('button');
        addButton.textContent = 'Add To-Do';
        addButton.setAttribute('data-project-index', projectIndex); // Add data attribute with project index
        addButton.addEventListener('click', () => {
            // Handle the add to-do button click event
            // Add your logic here
            toDoDialog.showModal();
            projectIndexer=addButton.getAttribute('data-project-index');
        });

        projectDiv.appendChild(addButton); // Append the add button to the project div
        ProjectsDiv.appendChild(projectDiv);
    });

    return ProjectsDiv;
}

contentDiv.appendChild(renderProjects(getprojectsFromLocalStorage()));

export function getPriorityColor(priority) {
    switch (priority) {
        case 'high':
            return 'red';
        case 'medium':
            return 'yellow';
        case 'low':
            return 'green';
        default:
            return 'gray';
    }
}
export function getprojectsFromLocalStorage() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
}
console.log(project.todoItems[0].priority);


export function createToDoDetailsDiv(item) {
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
        projectindex2 = todoProject[0];
        todoindex2 = todoProject[1];
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
        let deletedItems=[];
        deletedItems.push(projects[projectIndex].todoItems[todoIndex]);
        if(!localStorage.getItem('deletedItems')){
            localStorage.setItem('deletedItems',JSON.stringify(deletedItems));
        }
        else{
            let deletedItems=getDeletedItemsFromLocalStorage();
            deletedItems.push(projects[projectIndex].todoItems[todoIndex]);
            localStorage.setItem('deletedItems',JSON.stringify(deletedItems));
        }
        const contentDiv = document.querySelector('.projects');
        projects[projectIndex].todoItems.splice(todoIndex, 1);
        contentDiv.innerHTML="";
        localStorage.setItem('projects',JSON.stringify(projects)); 
        contentDiv.appendChild(renderProjects(getprojectsFromLocalStorage()));
        
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
const editConfirmBtn=document.querySelector('#edit-todo-dialog #confirm');
let projectindex2;
let todoindex2;

export function setProjectIndex(index) {
    projectindex2 = index;
}

export function setTodoIndex(index) {
    todoindex2 = index;
}
export function getDeletedItemsFromLocalStorage(){
    const deletedItems=JSON.parse(localStorage.getItem('deletedItems'));
    return deletedItems;
}

editConfirmBtn.addEventListener('click', () => {
    const todoItem = projects[projectindex2].todoItems[todoindex2];
    const titleInput = document.querySelector('#edit-todo-dialog #edit-todo-title');
    const descriptionInput = document.querySelector('#edit-todo-dialog #edit-todo-description');
    const dueDateInput = document.querySelector('#edit-todo-dialog #edit-todo-due-date');
    const priorityInput = document.querySelector('#edit-todo-dialog #edit-todo-priority');
    const notesInput = document.querySelector('#edit-todo-dialog #edit-todo-notes');
    const checklistInput = document.querySelector('#edit-todo-dialog #edit-todo-tasks');

    todoItem.title = titleInput.value;
    todoItem.description = descriptionInput.value;
    todoItem.dueDate = dueDateInput.value;
    todoItem.priority = priorityInput.value;
    todoItem.notes = notesInput.value;
    todoItem.checklist = checklistInput.value.split(',');
    contentDiv.innerHTML="";
    localStorage.setItem('projects',JSON.stringify(projects));
    contentDiv.appendChild(renderProjects(getprojectsFromLocalStorage()));
    if(panel=="Today"){
        mainContent.innerHTML="";
        createToday();
        
    }
    else if(panel=="Next 7 Days"){
        mainContent.innerHTML="";
        createThisWeek();
    }

    // Update the UI or perform any other necessary actions
});
let panel;
const mainContent=document.querySelector('.content');
const sidedivs=document.querySelectorAll('.sidebar>div');
sidedivs.forEach((div) => {
    div.addEventListener('click', () => {
        // Remove the active class from all divs
        sidedivs.forEach((div) => {
            div.classList.remove('active');
        });
        

        // Add the active class to the clicked div
        div.classList.add('active');
        mainContent.innerHTML="";
        panel=div.textContent;
        if(panel=="Projects"){
            recreateProjects(mainContent);
            const contentDiv = document.querySelector('.projects');
            contentDiv.appendChild(renderProjects(getprojectsFromLocalStorage()));
            recreateListeners();
        }
        else if(panel=="Today"){
            createToday();
        }
        else if(panel=="Next 7 Days"){
            createThisWeek();
        }
        else if(panel=="Trash"){
            createTrash();

        }
        
    });
});
function recreateListeners() {
    const editConfirmBtn=document.querySelector('#edit-todo-dialog #confirm');
    editConfirmBtn.addEventListener('click', () => {
        const todoItem = projects[projectindex2].todoItems[todoindex2];
        const titleInput = document.querySelector('#edit-todo-dialog #edit-todo-title');
        const descriptionInput = document.querySelector('#edit-todo-dialog #edit-todo-description');
        const dueDateInput = document.querySelector('#edit-todo-dialog #edit-todo-due-date');
        const priorityInput = document.querySelector('#edit-todo-dialog #edit-todo-priority');
        const notesInput = document.querySelector('#edit-todo-dialog #edit-todo-notes');
        const checklistInput = document.querySelector('#edit-todo-dialog #edit-todo-tasks');
    
        todoItem.title = titleInput.value;
        todoItem.description = descriptionInput.value;
        todoItem.dueDate = dueDateInput.value;
        todoItem.priority = priorityInput.value;
        todoItem.notes = notesInput.value;
        todoItem.checklist = checklistInput.value.split(',');
        const contentDiv=document.querySelector('.content');
        contentDiv.innerHTML="";
        localStorage.setItem('projects',JSON.stringify(projects));
        contentDiv.appendChild(renderProjects(getprojectsFromLocalStorage()));
        if(panel=="Today"){
            mainContent.innerHTML="";
            createToday();
            
        }
        else if(panel=="Next 7 Days"){
            mainContent.innerHTML="";
            createThisWeek();
        }
    

});
const confirmBtn=document.querySelector('#confirm');
const toDoConfirmBtn=document.querySelector('#todo-dialog #confirm');
confirmBtn.addEventListener('click',()=>{
    const project=createToDoProject(projectname.value,[]);
    projects.push(project);
    contentDiv.innerHTML="";
    localStorage.setItem('projects',JSON.stringify(projects));
    contentDiv.appendChild(renderProjects(getprojectsFromLocalStorage()));
});
toDoConfirmBtn.addEventListener('click',()=>{
    const title=document.querySelector('#todo-title');
    const description=document.querySelector('#todo-description');
    const dueDate=document.querySelector('#todo-due-date');
    const priority=document.querySelector('#todo-priority');
    const notes=document.querySelector('#todo-notes');
    const tasks=document.querySelector('#todo-tasks');
    const projectIndex=projectIndexer;
    const todo=createToDo(
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        notes.value,
        [tasks.value]
    );
    projects[projectIndex].todoItems.push(todo);
    localStorage.setItem('projects',JSON.stringify(projects));
    contentDiv.innerHTML="";
    contentDiv.appendChild(renderProjects(getprojectsFromLocalStorage()));
});
}

