import { Input } from "../utils/Input";

function Contact(props){

    const {contactInfo, onChange} = props;

    return(
        <div className = 'formDiv'>
            <Input type = 'text' name = 'phoneNumber' value = {contactInfo.phoneNumber} placeholder = 'Phone number' onChange = {onChange}></Input>
            <Input type = 'text' name = 'email' value = {contactInfo.email} placeholder = 'Email' onChange = {onChange}></Input>
            <Input type = 'text' name = 'address' value = {contactInfo.address} placeholder = 'Address' onChange = {onChange}></Input>
        </div>
    )
}

export {Contact}