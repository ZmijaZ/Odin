import { CartItem } from "./CartItem";
import '../../styles/cart.css'

function CartView(props){

    const {cart, onAdd, onRemove, price} = props;

    const cartItems = cart.map(function(newItem){

        return(
            <CartItem key = {newItem.id} id = {newItem.id} cartItemInfo = {newItem} onAdd = {onAdd} onRemove = {onRemove}></CartItem>
        )
    })

    return(
        <div className = 'cartView'>
            <h2>-- Cart --</h2>
            <div className = 'cartItemList'>
                {cartItems}
                <h3>Total price: ${price.toFixed(2)}</h3>
            </div>
        </div>
    )

}

export {CartView}