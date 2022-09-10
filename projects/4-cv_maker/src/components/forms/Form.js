import { Contact } from "./Contact";
import { Personal } from "./Personal";
import { School } from "./School";
import { Job } from "./Job";

function Form(props){

    const {cv, onChangePersonal, onChangeContact, onChangeSchool, handleAddSchool, handleDeleteSchool, onChangeJob, handleAddJob, handleDeleteJob, handlePrint, handleExample, handleReset} = props;

    return(

        <div className = 'form'>
            <Personal personalInfo = {cv.personalInfo} onChange = {onChangePersonal}></Personal>
            <Contact contactInfo = {cv.contactInfo} onChange = {onChangeContact}></Contact>
            <School schoolInfo = {cv.schoolInfo} onChange = {onChangeSchool} onAdd = {handleAddSchool} onDelete = {handleDeleteSchool}></School>
            <Job jobInfo = {cv.jobInfo} onChange = {onChangeJob} onAdd = {handleAddJob} onDelete = {handleDeleteJob}></Job>

            <button onClick = {handlePrint} id = 'printButton'>Print CV</button>
            <button onClick = {handleExample} id = 'exampleButton'>Show an example</button>
            <button onClick = {handleReset} id = 'resetButton'>Reset CV</button>
            
        </div>
    )
}

export {Form}