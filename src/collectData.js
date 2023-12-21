import createToDoProject from "./createToDoTask";
import { projects,renderProjects,projectIndexer,getprojectsFromLocalStorage} from "./toDoGUI";
import { createToDo } from "./createToDoTask";
const addbtn=document.querySelector('.add-button');
const dialog=document.querySelector('.Project-dialog');
addbtn.addEventListener('click',()=>{
    dialog.showModal();
});
const projectname=document.querySelector('#projectname');
const confirmBtn=document.querySelector('#confirm');
const toDoConfirmBtn=document.querySelector('#todo-dialog #confirm');
confirmBtn.addEventListener('click',()=>{
    const project=createToDoProject(projectname.value,[]);
    projects.push(project);
    const contentDiv=document.querySelector('.projects');
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
    const contentDiv=document.querySelector('.projects');
    contentDiv.innerHTML="";
    contentDiv.appendChild(renderProjects(getprojectsFromLocalStorage()));
});


export {addbtn};