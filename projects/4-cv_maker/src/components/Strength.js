
function Strength(props){

    const {strengths} = props.strength;

    return(

        <div id = 'strengthDiv' className = 'cvDiv'>

            <h1>Strength</h1>
            <h3>
                <ul>
                    {strengths.map(function(info, id){

                        return(
                            <li key = {id}>{info}</li>
                        )

                    })}
                </ul>
            </h3>

        </div>

    )

}

export {Strength}