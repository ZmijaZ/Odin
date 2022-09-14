
function CartItem(props){

    const {id, cartItemInfo, onAdd, onRemove} = props;

    return(

        <div className = 'cartItem'>
            <div className = 'cartItemImg'>
                <img src = {cartItemInfo.photo} alt = 'cartItemPhoto'></img>
            </div>

            <div className = 'cartItemText'>
                <h4>{cartItemInfo.name}</h4>
                <h5>Count: {cartItemInfo.cartCount}</h5>
            </div>

            <div className="cartItemButtons">
                <button onClick = {function(){return onAdd(id)}}> + </button>
                <button onClick = {function(){return onRemove(id)}}> - </button>
            </div>
        </div>
    )
}

export {CartItem}