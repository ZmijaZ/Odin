
function Item(props){

    const {itemInfo, onClick, id} = props;

    return(
        <div className = 'item'>

            <img src = {itemInfo.photo} alt = 'loadFailed'></img>
            <h3>{itemInfo.name}</h3>
            <p>{itemInfo.description}</p>
            <h4>{itemInfo.price}</h4>

            <button onClick = {function(){return onClick(id)}}>Add to cart</button>

        </div>
    )

}

export {Item}