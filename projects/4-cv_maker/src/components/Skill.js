import {useState} from 'react'

function Skill(props){

    const {title, skills} = props.skill;

    return(

        <div id = 'skillDiv' className = 'cvDiv'>

            <h1>Skills</h1>
            <h2>{title}</h2>
            <h3>
                <ul>
                    {skills.map(function(info, id){

                        return(
                            <li key = {id}>{info}</li>
                        )

                    })}
                </ul>
            </h3>

        </div>
    )
}

function SkillForm(){

    const [skill, setSkill] = useState({title: '', skills: [], text: ''});
    const [skills, setSkills] = useState([]);

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

    return(
        <form id = 'skillsForm' className = 'form'>
            <h1>Skills </h1>
            <input type = 'text' placeholder="Skill title" onChange = {onChangeSkillTitle}></input>
            <input type = 'text' placeholder="skill" value = {skill.text} onChange = {onChangeSkillText}></input>
            <button onClick = {onClickSkill}>Add task</button>
        </form>
    )
}

export {
    Skill,
    SkillForm
}