
import {Task, Project} from './task.js'

//querySelectors
const main = document.querySelector('#main');
const addTask = document.querySelector("#addTask");
const addProject = document.querySelector('#addProject');

//Task
const taskForm = document.querySelector('#taskForm');
const greenButton = document.querySelector('#greenButton');
const redButton = document.querySelector('#redButton');

    //Task inputs
const taskInput = document.querySelector('#taskInput');
const dateInput = document.querySelector('#dateInput');
const priorityInput = document.querySelector('#priorityInput');
const descriptionInput = document.querySelector('#descriptionInput');
const folderInput = document.querySelector('#folderInput');

//Project
const projectForm = document.querySelector('#projectForm');
const greenButton1 = document.querySelector('#greenButton1');
const redButton1 = document.querySelector('#redButton1');

const projectInput = document.querySelector('#projectInput');

//
const inbox = document.querySelector('#inbox');
const projectInbox = document.querySelector('#projectInbox');

//addEventListeners 
    //Tasks
addTask.addEventListener("click", openTaskInput);
redButton.addEventListener('click', closeTaskInput);
greenButton.addEventListener('click', greenButtonHandler);

    //Projects
addProject.addEventListener('click', openProjectInput);
redButton1.addEventListener('click', closeProjectInput);
greenButton1.addEventListener('click', greenButton1Handler);

//extra dataStructures
const inboxTaskArray = [];
const projectArray = [];

//eventHandlers
function openTaskInput(){

    addTask.style.visibility = 'hidden';
    taskForm.style.visibility = 'visible';
}

function closeTaskInput(){

    addTask.style.visibility = 'visible';
    taskForm.style.visibility = 'hidden';
}

function greenButtonHandler(){

    let task = Task(taskInput.value);
    task.setDate(dateInput.value);
    task.setPriority(priorityInput.value);
    task.setDescription(descriptionInput.value);
    task.setFolder(folderInput.value);

    inboxTaskArray.push(task);

    //create taskDiv
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskDiv.innerText = taskInput.value;

    taskAddClickHandler(taskDiv);
    inbox.appendChild(taskDiv);


    //cleanup
    addTask.style.visibility = 'visible';
    taskForm.style.visibility = 'hidden';
    taskInput.value = '';

    let taskInfo = (`Task name: ${task.name}, folder name: ${task.getFolder()}, date: ${task.getDate()}, priority: ${task.getPriority()}, description: ${task.getDescription().substring(0, 20)}`);
    console.log(taskInfo);
    console.log(inboxTaskArray);
}

//Project functions
function openProjectInput(){

    addProject.style.visibility = 'hidden';
    projectForm.style.visibility = 'visible';
}

function closeProjectInput(){

    addProject.style.visibility = 'visible';
    projectForm.style.visibility = 'hidden';

    projectInput.value();
}

function greenButton1Handler(){

    let project = Project(projectInput.value);

    //createProjectDiv
    let projectDiv = document.createElement('div');
    projectDiv.textContent = project.getName();
    projectDiv.classList.add('projectDiv');

    projectInbox.appendChild(projectDiv);


    //cleanup
    addProject.style.visibility = 'visible';
    projectForm.style.visibility = 'hidden';
    projectInput.value = '';
}



function taskAddClickHandler(task){

    console.log(inboxTaskArray);

    task.addEventListener('click', function(){

        //createElement
        const infoDiv = document.createElement('div');
        const infoDate = document.createElement('p');
        const infoPriority = document.createElement('p');
        const infoDescription = document.createElement('p');
        const infoFolder = document.createElement('p');

        infoDate.textContent = `Date: ${dateInput.value ? dateInput.value : 'none'}`;
        infoPriority.textContent = `Priority: ${priorityInput.value ? priorityInput.value : 'none'}`;
        infoDescription.textContent = `Description: ${descriptionInput.value ? descriptionInput.value : 'none'}`;
        infoFolder.textContent = `Project: ${folderInput.value ? folderInput.value : 'none'}`;

        //append
        infoDiv.appendChild(infoDate);
        infoDiv.appendChild(infoPriority);
        infoDiv.appendChild(infoDescription);
        infoDiv.appendChild(infoFolder);

        //style
        infoDiv.style.width = '200px';
        infoDiv.style.height = '100px';
        infoDiv.style.backgroundColor = 'blueviolet';

        task.appendChild(infoDiv);
    })

}

