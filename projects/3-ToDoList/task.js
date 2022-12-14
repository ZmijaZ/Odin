
function Task(text){

    let folder = 'inbox';
    let name = text;
    let priority = '';
    let date = '';
    let description = '';

    function setName(x){
        name = x;
    }
    function getName(){
        return name;
    }

    function setPriority(x){
        priority = x;
    }
    function getPriority(){
        return priority;
    }

    function setDate(x){
        date = x;
    }
    function getDate(){
        return date;
    }

    function setFolder(x){
        folder = x;
    }
    function getFolder(){
        return folder;
    }

    function setDescription(x){
        description = x;
    }
    function getDescription(){
        return description;
    }

    return {name, setName, getName, setPriority, getPriority, getDate, setDate, setFolder, getFolder, setDescription, getDescription}

}

function Project(text){

    let name = text;
    const projectTasks = new Set();
    const projectTasksDiv = new Set();

    function setName(x){
        name = x;
    }
    function getName(){
        return name;
    }

    function addTask(task, taskDiv){
        projectTasks.add(task);
        projectTasksDiv.add(taskDiv);
    }
    function removeTask(task, taskDiv){
        projectTasks.delete(task);
        projectTasksDiv.delete(taskDiv);
    }

    return {setName, getName, projectTasks, projectTasksDiv, addTask, removeTask}

}

export {Task, Project};