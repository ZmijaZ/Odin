import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { CVPreview } from "./extra/CVPreview";
import { emptyCv } from "./extra/emptyCv";
import { Form } from "./forms/Form";

function Main(){

    const [cv, setCv] = useState(emptyCv);

    //personalInfoChange
    function onChangePersonal(e){

        const {name, value} = e.target;

        setCv(function(prevState){
            return({...prevState, personalInfo: {...prevState.personalInfo, [name]: value}});
        })
    }
    function onChangeContact(e){

        const {name, value} = e.target;

        setCv(function(prevState){
            return({...prevState, contactInfo: {...prevState.contactInfo, [name]: value}});
        })
    }

    //schoolInfo
    function onChangeSchool(e, id){

        const {name, value} = e.target;

        setCv(function(prevState){

            const schoolItems = prevState.schoolInfo.map(function(newItem){
                if(newItem.id === id){
                    return({...newItem, [name]: value })
                }
                return newItem;
            })

            return({...prevState, schoolInfo: [...schoolItems]})

        })
    }
    function handleAddSchool(){

        setCv(function(prevState){
            return({...prevState, schoolInfo: [...prevState.schoolInfo, {id: uuidv4(), schoolName: "", major: "", from: "", to: ""}]})
        })
    }
    function handleDeleteSchool(id){
        setCv(function(prevState){

            const schoolItems = prevState.schoolInfo.filter(function(newItem){
                return id !== newItem.id;
            })
            return({...prevState, schoolInfo: [...schoolItems]});
        })
    }

    //jobInfo
    function onChangeJob(e, id){
 
        const {name, value} = e.target;

        setCv(function(prevState){
            const jobItems = prevState.jobInfo.map(function(newItem){
                if(newItem.id === id){
                    return({...newItem, [name]: value})
                }
                return newItem;
            })
            return({...prevState, jobInfo: [...jobItems]})
        })
    }
    function handleAddJob(){

        setCv(function(prevState){
            return({...prevState, jobInfo: [...prevState.jobInfo, {id: uuidv4(), companyName: "", title: "", from: "", to: ""}]})
        })
    }
    function handleDeleteJob(id){

        setCv(function(prevState){
            const jobItems = prevState.jobInfo.filter(function(newItem){
                return newItem.id !== id;
            })
            return({...prevState, jobInfo: [...jobItems]})
        })

    }


    return(

        <div>
            <Form cv = {cv} onChangePersonal = {onChangePersonal} onChangeContact = {onChangeContact} onChangeSchool = {onChangeSchool} onChangeJob = {onChangeJob}
            handleAddSchool = {handleAddSchool} handleDeleteSchool = {handleDeleteSchool} handleAddJob = {handleAddJob} handleDeleteJob = {handleDeleteJob}></Form>
            <CVPreview cv = {cv}></CVPreview>
        </div>

    )
}

export {Main}