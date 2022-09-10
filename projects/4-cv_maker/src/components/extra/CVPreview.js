import { Content } from "./Content";

function CVPreview(props){

    const {cv} = props;

    return(

        <Content personalInfo = {cv.personalInfo} contactInfo = {cv.contactInfo}></Content>

    )
}

export {CVPreview}