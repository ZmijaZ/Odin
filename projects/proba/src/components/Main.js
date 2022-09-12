import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { CVPreview } from "./extra/CVPreview";
import { emptyCv } from "./extra/emptyCv"
import { Form } from "./forms/Form";

function Main(){

    const [cv, setCv] = useState(emptyCv);

    function onChangePersonal(e){
        const {name, value} = e.target;

        setCv(function(prevState){
            return({...prevState, personalInfo:{...prevState.personalInfo, [name]: value}});
        })
    }

    function onChangeContact(e){
        const {name, value} = e.target;

        setCv(function(prevState){
            return({...prevState, contactInfo:{...prevState.contactInfo, [name]: value}})
        })
    }

    //school
    function onChangeSchool(e, id){

        const {name, value} = e.target;

        setCv(function(prevState){

            const newItem = prevState.schoolInfo.map(function(schoolItem){
                if(id === schoolItem.id){
                    return ({...schoolItem, [name]: value});
                }
                return schoolItem;
            })
            return({...prevState, schoolInfo: [...newItem]})
        })
    }
    function handleAddSchool(){

        setCv(function(prevState){

            return({...prevState, schoolInfo: [...prevState.schoolInfo, {
                id: uuidv4(),
                schoolName: '',
                major: '',
                from: '',
                to: ''
            }]})
        })
    }
    function handleDeleteSchool(id){

        setCv(function(prevState){

            const newItem = prevState.schoolInfo.filter(function(schoolItem){

                return (schoolItem.id !== id)
            });

            return {...prevState, schoolInfo: [...newItem]}
        })
    }

    //job
    function onChangeJob(e, id){

        const {name, value} = e.target;

        setCv(function(prevState){

            const newJob = prevState.jobInfo.map(function(jobItem){

                if(jobItem.id === id){
                    return ({...jobItem, [name]: value })
                }
                return jobItem;
            })

            return ({...prevState, jobInfo: [...newJob]})
        })
    }

    function handleAddJob(){

        setCv(function(prevState){

            return({...prevState, jobInfo: [...prevState.jobInfo, {
                id: uuidv4(),
                companyName: "",
                title: "",
                from: "",
                to: ""
            }]})

        })
    }

    function handleDeleteJob(id){

        setCv(function(prevState){

            const newJob = prevState.jobInfo.filter(function(jobItem){
                return (jobItem.id !== id)
            })

            return {...prevState, jobInfo: [...newJob]}
        })

    }


    return(
        <div id = 'Main'>

            <Form cv = {cv} onChangePersonal = {onChangePersonal} onChangeContact = {onChangeContact} onChangeSchool = {onChangeSchool} handleAddSchool = {handleAddSchool} handleDeleteSchool = {handleDeleteSchool} onChangeJob = {onChangeJob} handleAddJob = {handleAddJob} handleDeleteJob = {handleDeleteJob}></Form>

            <CVPreview cv = {cv}></CVPreview>

        </div>
    )
}

export {Main}