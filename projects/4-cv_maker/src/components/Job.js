
function Job(props){

    const {name, title, from, to, tasks} = props.job;
    
    return(

        <div id = 'jobDiv' className = 'cvDiv'>
            
            <h1>Experience</h1>

            <h2>{name}</h2>
            <h3>{title}</h3>
            <h3>{from}</h3>
            <h3>{to}</h3>
            <h3>
                <ul>
                    {tasks.map(function(task, id){

                        return(
                            <li key = {id}>{task}</li>
                        )

                    })}
                </ul>
            </h3>
        </div>

    )
}

export {Job}