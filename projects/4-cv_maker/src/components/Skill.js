
function Skill(props){

    const {title, skills} = props.skill;

    return(

        <div id = 'skillDiv' className = 'cvDiv'>

            <h1>Skills</h1>
            <h2>{title}</h2>
            <h3>

                <ul>
                    {skills.map(function(info, id){

                        return(
                            <li key = {id}>{info}</li>
                        )

                    })}
                </ul>

            </h3>

        </div>

    )
}

export {Skill}