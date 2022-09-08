import { useState } from "react"
import { Personal } from './Personal';
import { Contact } from "./Contact";
import { School } from "./School";
import { Job } from "./Job";
import { Skill } from './Skill';
import {Strength} from './Strength'

function Form(){

    const [personal, setPersonal] = useState({name: '', title: ''});
    const [contact, setContact] = useState({address: '', email: '', number: ''});
    const [school, setSchool] = useState({name: '', from: '', to: '', major: ''});
    const [job, setJob] = useState({name: '', title: '', from: '', to: '', tasks: [], text: ''});
    const [tasks, setTasks] = useState([]);

    const [skill, setSkill] = useState({title: '', skills: [], text: ''});
    const [skills, setSkills] = useState([]);

    const [strength, setStrength] = useState({strengths: [], text: ''})
    const [strengths, setStrengths] = useState([]);

    //personalInfo
    function onChangeHandlerName(e){
        console.log(e.target.value);
        setPersonal({...personal, name: e.target.value});
    }
    function onChangeHandlerTitle(e){
        console.log(e.target.value);
        setPersonal({...personal, title: e.target.value});
    }//

    //contactInfo
    function onChangeHandlerAddress(e){
        console.log(e.target.value);
        setContact({...contact, address: e.target.value});
    }
    function onChangeHandlerEmail(e){
        console.log(e.target.value);
        setContact({...contact, email: e.target.value});
    }
    function onChangeHandlerNumber(e){
        console.log(e.target.value);
        setContact({...contact, number: e.target.value});
    }//

    //schoolInfo
    function onChangeHandlerSchool(e){
        console.log(e.target.value);
        setSchool({...school, name: e.target.value});
    }
    function onChangeHandlerSchoolFrom(e){
        console.log(e.target.value);
        setSchool({...school, from: e.target.value});
    }
    function onChangeHandlerSchoolTo(e){
        console.log(e.target.value);
        setSchool({...school, to: e.target.value});
    }
    function onChangeHandlerMajor(e){
        console.log(e.target.value);
        setSchool({...school, major: e.target.value});
    }//

    //jobInfo
    function onChangeHandlerJob(e){
        console.log(e.target.value);
        setSchool({...job, name: e.target.value});
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

    //Skill info
    function onChangeSkillTitle(e){
        console.log(e.target.value);
        setSkill({...skill, title: e.target.value});
    }
    function onChangeSkillText(e){
        console.log(e.target.value);
        setSkill({...skill, text: e.target.value});
    }
    function onClickSkill(e){
        e.preventDefault();
        console.log('Added skill: ' + skill.text);

        skills.push(skill.text);
        skill.text = '';
        setSkill({...skill, skills: skills});
    }//

    //Strengths info
    function onChangeStrength(e){
        console.log(e.target.value);
        setStrength({...strength, text: e.target.value});
    }
    function onClickStrength(e){
        e.preventDefault();
        console.log('Added strength:' + strength.text);

        strengths.push(strength.text);
        strength.text = '';
        setStrength({...strength, strengths: strengths});
    }//



    function handleClick(e){

        e.preventDefault();
        console.log(strengths);
    }

    return (

        <div id = 'formDiv'>
            <form id = 'personalForm'>
                <input type = 'text' placeholder="Name"  onChange = {onChangeHandlerName}></input>
                <input type = 'text' placeholder="Title" onChange = {onChangeHandlerTitle}></input>
            </form>

            <form id = 'contactForm' className="form">
                <input type = 'text' placeholder="Address" onChange = {onChangeHandlerAddress}></input>
                <input type = 'text' placeholder="Email" onChange = {onChangeHandlerEmail}></input>
                <input type = 'text' placeholder="Phone number" onChange = {onChangeHandlerNumber}></input>
            </form>

            <form id = 'schoolForm' className = 'form'>
                <input type = 'text' placeholder="School name" onChange = {onChangeHandlerSchool}></input>
                <input type = 'text' placeholder="From" onChange = {onChangeHandlerSchoolFrom}></input>
                <input type = 'text' placeholder="To" onChange = {onChangeHandlerSchoolTo}></input>
                <input type = 'text' placeholder="Major" onChange = {onChangeHandlerMajor}></input>
            </form>

            <form id = 'jobForm' className = 'form'>
                <input type = 'text' placeholder="Company name" onChange = {onChangeHandlerJob}></input>
                <input type = 'text' placeholder="Title" onChange = {onChangeHandlerJobTitle}></input>
                <input type = 'text' placeholder="From" onChange = {onChangeHandlerJobFrom}></input>
                <input type = 'text' placeholder="To" onChange = {onChangeHandlerJobTo}></input>
                <input type = 'text' placeholder='Task' value = {job.text} onChange={onChangeHandlerJobText}></input>
                <button onClick = {onClickJobTask}>Add task</button>

                <button onClick = {handleClick}>View tasks</button>
            </form>

            <form id = 'skillsForm' className = 'form'>
                <input type = 'text' placeholder="Skill title" onChange = {onChangeSkillTitle}></input>
                <input type = 'text' placeholder="skill" value = {skill.text} onChange = {onChangeSkillText}></input>
                <button onClick = {onClickSkill}>Add task</button>

                <button onClick = {handleClick}>View tasks</button>
            </form>

            <form id = 'StrengthsForm' className = 'form'>
                <input type = 'text' placeholder="Strength" value = {strength.text} onChange = {onChangeStrength}></input>
                <button onClick = {onClickStrength}>Add strength</button>

                <button onClick = {handleClick}>View tasks</button>
            </form>

            <Personal personal = {personal}></Personal>
            <Contact contact = {contact}></Contact>
            <School school = {school}></School>
            <Job job = {job}></Job>
            <Skill skill = {skill}></Skill>
            <Strength strength = {strength}></Strength>


        </div>
        
    )

}

export {Form}