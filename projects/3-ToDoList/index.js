
import {Task} from './task.js'

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

const inbox = document.querySelector('#inbox');

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

    inbox.appendChild(taskDiv);

    let taskInfo = (`Task name: ${task.name}, folder name: ${task.getFolder()}, date: ${task.getDate()}, priority: ${task.getPriority()}, description: ${task.getDescription().substring(0, 20)}`);
    console.log(taskInfo);

    //cleanup
    addTask.style.visibility = 'visible';
    taskForm.style.visibility = 'hidden';
    taskInput.value = '';
}

//Project functions
function openProjectInput(){

    addProject.style.visibility = 'hidden';
    projectForm.style.visibility = 'visible';

}

function closeProjectInput(){

    addProject.style.visibility = 'visible';
    projectForm.style.visibility = 'hidden';

}

function greenButton1Handler(){
    
}