
function Item(props){

    const {itemInfo, onClick, id} = props;

    return(
        <div className = 'item'>

            <div className = 'imgDiv'>
                <img src = {itemInfo.photo} alt = 'loadFailed' ></img>
            </div>
            <h3 id = 'itemName'>{itemInfo.name}</h3>
            <p>{itemInfo.description}</p>

            <div className = 'lowerItemDiv'>
                <h4>${itemInfo.price}</h4>
                <button onClick = {function(){return onClick(id)}}>Add to cart</button>
            </div>

        </div>
    )
}

export {Item}