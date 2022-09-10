import { Contact } from "./Contact";
import { Personal } from "./Personal";

function Form(props){

    const {cv, onChangePersonal, onChangeContact} = props;

    return(

        <div>
            <Personal personalInfo = {cv.personalInfo} onChange = {onChangePersonal}></Personal>
            <Contact contactInfo = {cv.contactInfo} onChange = {onChangeContact}></Contact>
        </div>

    )
}

export {Form}