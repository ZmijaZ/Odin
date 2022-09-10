import { Content } from "./Content";

function CVPreview(props){

    const {cv} = props;

    return(

        <Content personalInfo = {cv.personalInfo} contactInfo = {cv.contactInfo} schoolInfo = {cv.schoolInfo} jobInfo = {cv.jobInfo}></Content>
    )
}

export {CVPreview}