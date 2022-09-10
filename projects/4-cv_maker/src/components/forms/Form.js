import { Contact } from "./Contact";
import { Personal } from "./Personal";
import { School } from "./School";
import { Job } from "./Job";

function Form(props){

    const {cv, onChangePersonal, onChangeContact, onChangeSchool, handleAddSchool, handleDeleteSchool, onChangeJob, handleAddJob, handleDeleteJob} = props;

    return(

        <div>
            <Personal personalInfo = {cv.personalInfo} onChange = {onChangePersonal}></Personal>
            <Contact contactInfo = {cv.contactInfo} onChange = {onChangeContact}></Contact>
            <School schoolInfo = {cv.schoolInfo} onChange = {onChangeSchool} onAdd = {handleAddSchool} onDelete = {handleDeleteSchool}></School>
            <Job jobInfo = {cv.jobInfo} onChange = {onChangeJob} onAdd = {handleAddJob} onDelete = {handleDeleteJob}></Job>
        </div>
    )
}

export {Form}