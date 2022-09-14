
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
            <h2>Home</h2>
            <h2>Store</h2>
            <h2>About</h2>
            <h2 onClick = {openCart}>Cart</h2>
        </div>

    )
}
export {Header}