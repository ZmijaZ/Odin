
function PreviewCv(props){

    const {personalInfo, contactInfo, schoolInfo} = props;

    return(
        <div id = 'previewCv'>

            <h1>{personalInfo.firstName + " " + personalInfo.lastName + ", title: " + personalInfo.title}</h1>

            <h1>{schoolInfo.schoolName + " " + schoolInfo.major + ", from: " + schoolInfo.from + " to: " + schoolInfo.to}</h1>

            <h1>{contactInfo.phoneNumber + " " + contactInfo.email + " " + contactInfo.address}</h1>

        </div>
    )
}

export {PreviewCv}