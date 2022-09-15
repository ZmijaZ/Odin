import { CartItem } from "./CartItem";
import '../../styles/cart.css'

function CartView(props){

    const {cart, onAdd, onRemove, price, cartStyle, showCart} = props;

    const cartItems = cart.map(function(newItem){
        if(newItem.cartCount)
            return(
                <CartItem key = {newItem.id} id = {newItem.id} cartItemInfo = {newItem} onAdd = {onAdd} onRemove = {onRemove}></CartItem>
            )
    })

    return(
        <div className = 'cartView' style = {cartStyle}>
            <h2>-- Cart --</h2>
            <div className = 'cartItemList'>
                {cartItems}
                <h3>Total price: ${price.toFixed(2)}</h3>
            </div>

            <div className = 'cartViewButtons'>
                <button onClick = {showCart} id = 'button1'>Continue shopping</button>
                <button id = 'button2'>Check out</button>
            </div>
        </div>
    )

}

export {CartView}