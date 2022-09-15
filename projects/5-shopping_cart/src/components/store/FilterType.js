
function FilterType(props){

    const {onClick, type, id} = props;

    return(

        <div className = 'type'>
            <h2 onClick = {function(){return onClick(id)}}>{type}</h2>
        </div>
    )
}

export {FilterType}