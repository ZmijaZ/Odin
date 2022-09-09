import { useState } from "react";
import { emptyCv } from "./utils/emptyCv";
import { Form } from "./forms/Form";
import { PreviewCv } from "./utils/previewCv";

function Main(){

    const [cv, setCv] = useState(emptyCv);

    function onChangePersonal(e){

        const {name, value} = e.target;

        setCv(function(prevstate){

            return({...prevstate, personalInfo: {...prevstate.personalInfo, [name]: value} });

        })
    }

    function onChangeContact(e){

        const {name, value} = e.target;

        setCv(function(prevstate){

            return({...prevstate, contactInfo: {...prevstate.contactInfo, [name]: value}});

        })

    }

    function onChangeSchool(e){

        const {name, value} = e.target;

        setCv(function(prevstate){

            return({...prevstate, schoolInfo: {...prevstate.schoolInfo, [name]: value}});

        })

    }

    return(

        <div id = 'Main'>

            <Form cv = {cv} onChangePersonal = {onChangePersonal} onChangeContact = {onChangeContact} onChangeSchool = {onChangeSchool}></Form>

            <h1>Preview CV</h1>
            <PreviewCv personalInfo = {cv.personalInfo} contactInfo = {cv.contactInfo} schoolInfo = {cv.schoolInfo}></PreviewCv>

        </div>

    )

}

export {Main}