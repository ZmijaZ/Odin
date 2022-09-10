

function Content(props){

    const {personalInfo, contactInfo, schoolInfo, jobInfo} = props;

        const schoolItems = schoolInfo.map(function(newItem){

            return(
                <div className="schoolItem" key = {newItem.id}>

                    <section id = 'schoolLeft'>
                        <h3>{`${newItem.from} - ${newItem.to} `}</h3>
                    </section>

                    <section id = 'schoolRight'>
                        <h3 id = 'h3Bold'>{newItem.schoolName + ', ' + newItem.city}</h3>
                        <h3>Subject: {newItem.major}</h3>
                        <h3>Degree: {newItem.degree}</h3>
                    </section>
                </div>
            )
        })

        const jobItems = jobInfo.map(function(newItem){

            return(
                <div className="jobItem" key = {newItem.id}>

                    <section id = 'jobLeft'>
                        <h3>{`${newItem.from} - ${newItem.to} `}</h3>
                    </section>

                    <section id = 'jobRight'>
                        <h3 id = 'h3Bold'>{newItem.companyName}</h3>
                        <h3>{newItem.title}</h3>
                    </section>
                </div>
            )
        })

    return(

        <div className = 'content'>

            <div className = 'contentHeader'>
                <h1 id = 'name'>{personalInfo.firstName + ' ' + personalInfo.lastName}</h1>
                <h2>{personalInfo.title}</h2>
            </div>
            
            <div className = 'contentBody'>

                <div className = 'contact'>
                    <img src = {personalInfo.photo} alt = 'face' width = '175px'></img>
                    <h2>Contact</h2>
                    <section>
                        <h3>{contactInfo.phoneNumber}</h3>
                        <h3>{contactInfo.email} </h3>
                        <h3>{contactInfo.address}</h3>
                    </section>
                </div>

                <div className = 'info'>
                    <h2>About me</h2>
                    <p>{personalInfo.aboutMe}</p>

                    <h2 id = 'schoolH2'>School info</h2>
                    {schoolItems}

                    <h2 id = 'jobH2'>Job info</h2>
                    {jobItems}
                </div>

            </div>

            

        </div>
    )
}

export {Content}