import { Personal } from "./Personal";
import { Contact } from "./Contact";
import { School } from "./School";

function Form(props){

    const {cv, onChangePersonal, onChangeContact, onChangeSchool} = props;

    return (

        <div>

            <Personal personalInfo = {cv.personalInfo} onChange = {onChangePersonal} ></Personal>
            <Contact contactInfo = {cv.contactInfo} onChange = {onChangeContact}></Contact>
            <School schoolInfo = {cv.schoolInfo} onChange = {onChangeSchool}></School>

        </div>

    )

}

export {Form}