import { useState } from "react";
import { CVPreview } from "./extra/CVPreview";
import { emptyCv } from "./extra/emptyCv";
import { Form } from "./forms/Form";

function Main(){

    const [cv, setCv] = useState(emptyCv);

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

    return(

        <div>
            <Form cv = {cv} onChangePersonal = {onChangePersonal} onChangeContact = {onChangeContact}></Form>
            <CVPreview cv = {cv}></CVPreview>
        </div>

    )
}

export {Main}