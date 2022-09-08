import {useState} from 'react'

function Job(props){

    const {name, title, from, to, tasks} = props.job;
    
    return(

        <div id = 'jobDiv' className = 'cvDiv'>
            
            <h1>Experience</h1>

            <h2>{name}</h2>
            <h3>{title}</h3>
            <h3>{from}</h3>
            <h3>{to}</h3>
            <h3>
                <ul>
                    {tasks.map(function(task, id){

                        return(
                            <li key = {id}>{task}</li>
                        )
                    })}
                </ul>
            </h3>
        </div>

    )
}

function JobForm(){

    const [job, setJob] = useState({name: '', title: '', from: '', to: '', tasks: [], text: ''});
    const [tasks, setTasks] = useState([]);


    //jobInfo
    function onChangeHandlerJob(e){
        console.log(e.target.value);
        setJob({...job, name: e.target.value});
    }
    function onChangeHandlerJobTitle(e){
        console.log(e.target.value);
        setJob({...job, title: e.target.value});
    }
    function onChangeHandlerJobFrom(e){
        console.log(e.target.value);
        setJob({...job, from: e.target.value});
    }
    function onChangeHandlerJobTo(e){
        console.log(e.target.value);
        setJob({...job, to: e.target.value});
    }
    function onChangeHandlerJobText(e){
        console.log(e.target.value);
        setJob({...job, text: e.target.value});
    }
    function onClickJobTask(e){
        e.preventDefault();
        console.log("Added task: " + job.text);

        tasks.push(job.text);
        job.text = '';
        setJob({...job, tasks: tasks});
    }//

    function clickHandler(e){

        e.preventDefault();
        console.log(job.tasks);
    }


    return(

        <form id = 'jobForm' className = 'form'>
            <h1>Jobs </h1>
            <input type = 'text' placeholder="Company name" onChange = {onChangeHandlerJob}></input>
            <input type = 'text' placeholder="Title" onChange = {onChangeHandlerJobTitle}></input>
            <input type = 'text' placeholder="From" onChange = {onChangeHandlerJobFrom}></input>
            <input type = 'text' placeholder="To" onChange = {onChangeHandlerJobTo}></input>
            <input type = 'text' placeholder='Task' value = {job.text} onChange={onChangeHandlerJobText}></input>
            <button onClick = {onClickJobTask}>Add task</button>
            <button onClick = {clickHandler}>Console log tasks</button>
        </form>
    )

}

export {
    
    Job,
    JobForm

}