
import {useState} from 'react';

function School(props){

    const {name, from, to, major} = props.school;

    return(
        <div id = 'jobDiv' className = 'cvDiv'>

            <h1>School: </h1>

            <h2>{name}</h2>
            <h3>{from}</h3>
            <h3>{to}</h3>
            <h3>{major}</h3>
        </div>
    )
}

function SchoolForm(){

    const [school, setSchool] = useState({name: '', from: '', to: '', major: ''});

    //schoolInfo
        function onChangeHandlerName(e){
            console.log(e.target.value);
            setSchool({...school, name: e.target.value});
        }
        function onChangeHandlerFrom(e){
            console.log(e.target.value);
            setSchool({...school, from: e.target.value});
        }
        function onChangeHandlerTo(e){
            console.log(e.target.value);
            setSchool({...school, to: e.target.value});
        }
        function onChangeHandlerMajor(e){
            console.log(e.target.value);
            setSchool({...school, major: e.target.value});
    }//

    return(

         <form id = 'schoolForm' className = 'form'>
            <h1>School </h1>
            <input type = 'text' placeholder="School name" onChange = {onChangeHandlerName}></input>
            <input type = 'text' placeholder="From" onChange = {onChangeHandlerFrom}></input>
            <input type = 'text' placeholder="To" onChange = {onChangeHandlerTo}></input>
            <input type = 'text' placeholder="Major" onChange = {onChangeHandlerMajor}></input>
        </form>

    )
}

export {
    School,
    SchoolForm
}