import { useState } from "react";

function Personal(props){

    const {name, title} = props.personal;

    return(

        <div id = 'personalDiv' className = 'cvDiv'>
            <h1>{name}</h1>
            <h2>{title}</h2>
        </div>
    )
}

function PersonalForm(){

    const [personal, setPersonal] = useState({name: '', title: ''});


    //personalInfo
    function onChangeHandlerName(e){
        console.log(e.target.value);
        setPersonal({...personal, name: e.target.value});
    }
    function onChangeHandlerTitle(e){
        console.log(e.target.value);
        setPersonal({...personal, title: e.target.value});
    }//

    return(
        <div>
        <form id = 'personalForm'>
                <h1>Personal </h1>
                <input type = 'text' placeholder="Name"  onChange = {onChangeHandlerName}></input>
                <input type = 'text' placeholder="Title" onChange = {onChangeHandlerTitle}></input>
        </form>
        <Personal personal = {personal}></Personal>
        </div>
    )

}

export {
    Personal,
    PersonalForm
}

