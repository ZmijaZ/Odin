
function Content(props){

    const {personalInfo, contactInfo} = props;

    return(

        <div>
            <h1>{personalInfo.firstName + ' ' + personalInfo.lastName}</h1>
            <h2>{personalInfo.title}</h2>
            <br></br>
            <h3>{contactInfo.email + ' ' + contactInfo.phoneNumber}</h3>
            <h3>{contactInfo.address}</h3>

        </div>
    )
}

export {Content}