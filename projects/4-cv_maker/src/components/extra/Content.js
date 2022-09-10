
function Content(props){

    const {personalInfo, contactInfo, schoolInfo, jobInfo} = props;

        const schoolItems = schoolInfo.map(function(newItem){

            return(
                <div key = {newItem.id}>
                    <h2>{newItem.schoolName}</h2>
                    <h3>{newItem.major}</h3>
                    <h3>{`from: ${newItem.from} to: ${newItem.to} `}</h3>
                </div>
            )
        })

        const jobItems = jobInfo.map(function(newItem){

            return(
                <div key = {newItem.id}>
                    <h2>{newItem.companyName}</h2>
                    <h3>{newItem.title}</h3>
                    <h3>{`from: ${newItem.from} to: ${newItem.to} `}</h3>
                </div>
            )
        })

    return(

        <div>
            <h1>{personalInfo.firstName + ' ' + personalInfo.lastName}</h1>
            <h2>{personalInfo.title}</h2>
            <img src = {personalInfo.photo} alt = 'face'></img>
            <br></br>
            <h3>{contactInfo.email + ' ' + contactInfo.phoneNumber}</h3>
            <h3>{contactInfo.address}</h3>

            {schoolItems}
            {jobItems}

        </div>
    )
}

export {Content}