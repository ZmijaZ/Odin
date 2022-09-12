
import { useState } from 'react'

import '../styles/header.css'

function Header(){

    const [showCart, setShowCart] = useState(false)

    function openCart(){
        if(showCart){
            setShowCart(!showCart);

        }else{
            setShowCart(!showCart);
            
        }
    }

    return(

        <div className = 'header'>
            <h1>STORE NAME</h1>
            <h1>Home</h1>
            <h1>Store</h1>
            <h1>About</h1>
            <h1 onClick = {openCart}>Cart</h1>
        </div>

    )
}
export {Header}