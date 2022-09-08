import {useState} from 'react'

function Strength(props){

    const {strengths} = props.strength;

    return(

        <div id = 'strengthDiv' className = 'cvDiv'>

            <h1>Strength</h1>
            <h3>
                <ul>
                    {strengths.map(function(info, id){

                        return(
                            <li key = {id}>{info}</li>
                        )

                    })}
                </ul>
            </h3>

        </div>

    )

}

function StrengthForm(){

    const [strength, setStrength] = useState({strengths: [], text: ''})
    const [strengths, setStrengths] = useState([]);

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

    return (

        <form id = 'StrengthsForm' className = 'form'>
            <h1>Strengths </h1>
            <input type = 'text' placeholder="Strength" value = {strength.text} onChange = {onChangeStrength}></input>
            <button onClick = {onClickStrength}>Add strength</button>
        </form>

    )

}

export {
    Strength,
    StrengthForm
}