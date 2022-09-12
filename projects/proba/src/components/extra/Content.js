
function Content(props){

    const {personalInfo, contactInfo} = props;

    return (

        <div id = 'Content'>

            <div id = 'personalContent'>
                <h2> {personalInfo.firstName + " " + personalInfo.lastName}</h2>

                <h2> {personalInfo.title}</h2>
            </div>

            <div id = 'contactContent'>
                <h2> {contactInfo.phoneNumber + " " + contactInfo.email}</h2>
             
                <h2>{contactInfo.address}</h2>

            </div>

        </div>
    )
}

export {Content}