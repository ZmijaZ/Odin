import { Input } from "../extra/Input";
import { Section } from "../extra/Section";
import { FileInput } from "./FileInput";

function Personal(props){

    const {personalInfo, onChange} = props;

    return(

        <Section title = 'Personal info'>

            <Input type = 'text' name = 'firstName' value = {personalInfo.firstName} placeholder = 'First name' onChange = {onChange}></Input>
            <Input type = 'text' name = 'lastName' value = {personalInfo.lastName} placeholder = 'Last name' onChange = {onChange}></Input>
            <Input type = 'text' name = 'title' value = {personalInfo.title} placeholder = 'Title' onChange = {onChange}></Input>

            <FileInput name = 'photo' onChange = {onChange} value = {personalInfo.photo} ></FileInput>

        </Section>
    )
}

export {Personal}