import { CartItem } from "./CartItem";

function CartView(props){

    const {cart, onAdd, onRemove} = props;

    const cartItems = cart.map(function(newItem){
        return(
            <CartItem key = {newItem.id} id = {newItem.id} cartItemInfo = {newItem} onAdd = {onAdd} onRemove = {onRemove}></CartItem>
        )
    })

    return(
        <div className = 'cartView'>
            <h2>-- Cart --</h2>
            {cartItems}
        </div>
    )

}

export {CartView}