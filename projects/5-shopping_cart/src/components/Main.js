import { useState } from 'react'
import { RouteSwitch } from "../pages/RouteSwitch";
import { Header } from "./Header";
import { CartView } from "./cart/CartView";
import { items } from './store/items';

const tmpCart = [];

function Main(){

    const [cart, setCart] = useState([]);

    function addItemToCart(id){
        
        items.map(function(newItem){
            if(newItem.id === id){
                if(!itemInCart(newItem)){
                    tmpCart.push(newItem);
                    setCart(tmpCart);
                }
                newItem.cartCount++;
            }
        })

        setCart([...tmpCart]);

    }
    
    function itemInCart(item){
        for(let x of tmpCart)
            if(x === item)
                return true;
        
        return false;
    }

    function handleAdd(id){
        cart.map(function(newItem){
            if(id === newItem.id)
                newItem.cartCount++;
            return newItem;
        })

        setCart([...cart])

    }
    function handleRemove(id){

        cart.map(function(newItem){
            if(id === newItem.id){
                if(newItem.cartCount === 1){
                    console.log('doing')
                    setCart(function(prevState){
                        prevState.filter(function(newItem){
                            return id !== newItem.id
                        })
                    })
                }
                else 
                    newItem.cartCount--;
            }

        })

        setCart([...cart])

    }


    return (
        <div className = 'main'>

            
            <RouteSwitch addItemToCart = {addItemToCart}></RouteSwitch>

            <CartView cart = {cart} onAdd = {handleAdd} onRemove = {handleRemove}></CartView>
        </div>
    )
}

export {Main}