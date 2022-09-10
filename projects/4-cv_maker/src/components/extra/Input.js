
function Input(props){

    const {type, name, value, placeholder, onChange, className} = props;

    return(
        <input className = {className} type = {type} name = {name} value = {value} placeholder = {placeholder} onChange = {onChange}></input>
    )

}

function TextArea(props){

    const {name, value, placeholder, onChange} = props;

    return(
        <textarea name = {name} value = {value} placeholder = {placeholder} onChange = {onChange}></textarea>
    )

}

export {Input, TextArea}