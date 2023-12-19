export function recreateProjects(mainSection){
    const addProjectDiv = document.createElement('div');
    addProjectDiv.classList.add('add-project');
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('add-button');
    const plusIcon = document.createElement('i');
    plusIcon.classList.add('fas');
    plusIcon.classList.add('fa-plus');
    addProjectBtn.appendChild(plusIcon);
    const addProjectText = document.createElement('span');
    addProjectText.textContent = 'Add Project';
    addProjectText.classList.add('add-project-text');
    addProjectDiv.appendChild(addProjectBtn);
    addProjectDiv.appendChild(addProjectText);
    const projectsDiv=document.createElement('div');
    projectsDiv.classList.add('projects');
    mainSection.appendChild(addProjectDiv);
    mainSection.appendChild(projectsDiv);
}