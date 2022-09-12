
function Input(props){

    const {type, name, value, placeholder, onChange} = props;

    return(
        <input type = {type} name = {name} value = {value} placeholder = {placeholder} onChange = {onChange}></input>
    )
}
export {Input}
