
import {Task, Project} from './task.js'

//querySelectors
const main = document.querySelector('#main');
const addTask = document.querySelector("#addTask");
const addProject = document.querySelector('#addProject');
const h1 = document.querySelector('#h1');
const inboxDiv = document.querySelector('#inboxDiv');
const todayDiv = document.querySelector('#todayDiv');

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

inboxDiv.addEventListener('click', function(){

    h1.textContent = 'Inbox';
    folderInput.value = 'Inbox';
    showProjectTasks();
});

todayDiv.addEventListener('click', showTodayTasks)

//extra dataStructures
const taskArray = new Set();
const taskArrayDiv = new Set();
const projectArray = new Set();

let inboxProject = Project('Inbox');
projectArray.add(inboxProject);


//eventHandlers
function openTaskInput(){

    addTask.style.visibility = 'hidden';
    taskForm.style.visibility = 'visible';

    inbox.style.marginTop = '0px';
}

function closeTaskInput(){

    addTask.style.visibility = 'visible';
    taskForm.style.visibility = 'hidden';

    inbox.style.marginTop = '-120px';

    taskInput.value = '';
    descriptionInput.value = '';
    priorityInput.value = '';
    folderInput.value = '';
}

function greenButtonHandler(){

    //get the task info
    if(taskInput.value == ''){
        taskInput.style.border = '1px solid red';
        taskInput.placeholder = 'ENTER NAME FIRST';
        setTimeout(function(){
            taskInput.style.border = '1px solid gray';
            taskInput.placeholder = 'Enter task';
        }, 1000)
    }else{
        let task = Task(taskInput.value);
        task.setDate(dateInput.value);
        task.setPriority(priorityInput.value);
        task.setDescription(descriptionInput.value);
        task.setFolder(folderInput.value);

        taskArray.add(task);

        //create taskDiv
        let taskDiv = document.createElement('div');
        let taskP = document.createElement('p');
        taskP.textContent = task.getName();
        taskP.id = 'taskP';
            //extra functionality
        let textDiv = document.createElement('div'); //to store taskName and edit/delete 
        const editDiv = document.createElement('div');
        let editP = document.createElement('span');
        editP.classList.add('editP');
        let closeP = document.createElement('span');
        closeP.classList.add('closeP');
        editP.textContent = 'E';
        closeP.textContent = 'X';

        taskArrayDiv.add(taskDiv);

        taskDiv.classList.add('taskDiv');
        textDiv.classList.add('textDiv')
        editDiv.appendChild(editP);
        editDiv.appendChild(closeP);
        textDiv.appendChild(taskP);
        textDiv.appendChild(editDiv);

        taskDiv.appendChild(textDiv);

        //
        addTaskToProject(task, taskDiv);
        //

        inbox.appendChild(taskDiv);
        // showProjectTasks();

        //add the ability to see task info
        let infoDiv = addTaskInfo(taskDiv);
        taskAddClickHandler(taskDiv, infoDiv);

        //edit and delete buttons
        editP.addEventListener('click', function(){
            editP.style.color = 'red'
        });

        closeP.addEventListener('click', function(){

            for(let x of projectArray)
                if(x.getName() === task.getFolder())
                    projectArray.delete(x);

            taskArray.delete(task);
            taskArrayDiv.delete(taskDiv);
            inbox.removeChild(taskDiv);
        });

        //cleanup
        addTask.style.visibility = 'visible';
        taskForm.style.visibility = 'hidden';
        taskInput.value = '';
        descriptionInput.value = '';
        priorityInput.value = '';
        inbox.style.marginTop = '-120px';
        //print some basic info (helps during dev)
        let taskInfo = (`Task name: ${task.name}, folder name: ${task.getFolder()}, date: ${task.getDate()}, priority: ${task.getPriority()}, description: ${task.getDescription().substring(0, 20)}`);
        console.log(taskInfo);
        // console.log(inboxTaskArray);
    }
}

//Project functions
function openProjectInput(){

    addProject.style.visibility = 'hidden';
    projectForm.style.visibility = 'visible';
}

function closeProjectInput(){

    addProject.style.visibility = 'visible';
    projectForm.style.visibility = 'hidden';

    projectInput.value = '';
}

function greenButton1Handler(){

    let project = Project(projectInput.value);

    //createProjectDiv
    let projectDiv = document.createElement('div');
    projectDiv.textContent = project.getName();
    projectDiv.classList.add('projectDiv');

    //
    projectArray.add(project);
    projectInbox.appendChild(projectDiv);

    //open the project tasks
    projectAddClickHandler(project, projectDiv);

    //add new option to project select
    let option = new Option(projectInput.value, projectInput.value)
    folderInput.appendChild(option);

    //cleanup
    addProject.style.visibility = 'visible';
    projectForm.style.visibility = 'hidden';
    projectInput.value = '';
}

function addTaskInfo(task){

    //createElement
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('infoDiv');
    const infoDate = document.createElement('p');
    const infoPriority = document.createElement('p');
    const infoDescription = document.createElement('p');
    const infoFolder = document.createElement('p');

    const dateSpan = document.createElement('span');
    const prioritySpan = document.createElement('span');
    const descriptionSpan = document.createElement('span');
    const folderSpan = document.createElement('span');
    //text
    dateSpan.textContent = 'Date:';
    prioritySpan.textContent = 'Priority:';
    descriptionSpan.textContent = 'Description:';
    folderSpan.textContent = 'Folder:';

    infoDate.textContent = `${dateSpan.textContent} ${dateInput.value ? dateInput.value : 'none'}`;
    infoPriority.textContent = `${prioritySpan.textContent} ${priorityInput.value ? priorityInput.value : 'none'}`;
    infoDescription.textContent = `${descriptionSpan.textContent} ${descriptionInput.value ? descriptionInput.value : 'none'}`;
    infoFolder.textContent = `${folderSpan.textContent} ${folderInput.value ? folderInput.value : 'none'}`;

    //append
    infoDiv.appendChild(infoDescription);
    infoDiv.appendChild(infoPriority);
    infoDiv.appendChild(infoDate);
    infoDiv.appendChild(infoFolder);
    
    task.appendChild(infoDiv);
        
    //style
    infoDiv.style.width = '200px';
    infoDiv.style.height = '100px';
    infoDiv.style.visibility = 'hidden';
    infoDiv.style.height = '0px';

    return infoDiv;
}

function taskAddClickHandler(task, info){

    let showInfo = false;

    task.addEventListener('click', function(){

        if(showInfo == false){
            info.style.visibility = 'visible';
            info.style.height = '100%';
        }
        else if(showInfo == true){
            info.style.visibility = 'hidden';
            info.style.height = '0px';
        }

        showInfo = !showInfo;
        console.log(showInfo);
    })
}

function projectAddClickHandler(project, projectDiv){

    projectDiv.addEventListener('click', function(){

        h1.textContent = project.getName();
        folderInput.value = h1.textContent;

        showProjectTasks();
    })

}

function addTaskToProject(task, taskDiv){

    for(let x of projectArray){
        if(x.getName() === task.getFolder()){
            x.addTask(task, taskDiv);
        } 
    }
}

function showProjectTasks(){

    //remove inbox tasks
    console.log(inbox.children.length);
    inbox.innerHTML = '';

    for(let x of projectArray){

        if(h1.textContent === x.getName()){
            console.log(inbox.children.length);

            //append the project tasks
            for(let task of x.projectTasksDiv){
                inbox.appendChild(task);
            }

        }
    }
}

function showTodayTasks(){

    h1.textContent = 'Today';
    inbox.innerHTML = '';

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    let n = taskArray.length;
    for(let i = 0; i<n; i++)
        if(taskArray[i].getDate() == today){
            inbox.appendChild(taskArrayDiv[i]);
        }
}

function deleteTask(task, taskDiv){



}