
function CartItem(props){

    const {id, cartItemInfo, onAdd, onRemove} = props;

    return(

        <div className = 'cartItem'>
            <h5>{cartItemInfo.name}</h5>
            <h5>{cartItemInfo.cartCount}</h5>

            <button onClick = {function(){return onAdd(id)}}> + </button>
            <button onClick = {function(){return onRemove(id)}}> - </button>
        </div>
    )
}

export {CartItem}