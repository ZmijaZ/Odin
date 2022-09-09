import { Input } from "../utils/Input";

function Personal(props){

    const {personalInfo, onChange} = props;

    return(

        <div className = 'formDiv'>
            <Input type = 'text' name = 'firstName' value = {personalInfo.firstName} placeholder = 'First Name' onChange = {onChange} ></Input>
            <Input type = 'text' name = 'lastName' value = {personalInfo.lastName} placeholder = 'Last Name' onChange = {onChange} ></Input>
            <Input type = 'text' name = 'title' value = {personalInfo.title} placeholder = 'Title' onChange = {onChange} ></Input>
        </div>
    )
}

export {Personal}