import { Input } from "../extra/Input";
import { Section } from "../extra/Section";

function Contact(props){

    const {contactInfo, onChange} = props;

    return(

        <Section title = 'Contact info'>

            <Input type = 'text' name = 'phoneNumber' value = {contactInfo.firstName} placeholder = 'Phone number' onChange = {onChange}></Input>
            <Input type = 'text' name = 'email' value = {contactInfo.lastName} placeholder = 'Email' onChange = {onChange}></Input>
            <Input type = 'text' name = 'address' value = {contactInfo.title} placeholder = 'Address' onChange = {onChange}></Input>

        </Section>
    )
}

export {Contact}