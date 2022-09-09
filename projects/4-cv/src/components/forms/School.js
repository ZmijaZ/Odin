import { Input } from "../utils/Input";

function School(props){

    const {schoolInfo, onChange} = props;

    return(
        <div className = 'formDiv'>
            <Input type = 'text' name = 'schoolName' value = {schoolInfo.schoolName} placeholder = 'School name' onChange = {onChange}></Input>
            <Input type = 'text' name = 'major' value = {schoolInfo.major} placeholder = 'Major' onChange = {onChange}></Input>
            <Input type = 'text' name = 'from' value = {schoolInfo.from} placeholder = 'From' onChange = {onChange}></Input>
            <Input type = 'text' name = 'to' value = {schoolInfo.to} placeholder = 'To' onChange = {onChange}></Input>
        </div>
    )
}

export {School}