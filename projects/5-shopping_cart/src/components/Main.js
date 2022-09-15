import { useEffect, useState } from 'react'
import { RouteSwitch } from "../pages/RouteSwitch";
import { CartView } from "./cart/CartView";
import { items } from './store/items';

import '../styles/main.css'

const tmpCart = [];

function Main(){

    const [cart, setCart] = useState([]);
    const [fitems, setFitems] = useState(items);
    const [cartStyle, setCartStyle] = useState({ display: 'none'});
    const [cartV, setCartV] = useState(true);

    //filterTypes
    const typeSet = new Set();
    const types = ['all items'];

    for(let item of items)
        typeSet.add(item.type);
    for(let x of typeSet)
        types.push(x);
    //////////////
    
    function addItemToCart(id){
        items.map(function(newItem){
            if(newItem.id === id){
                if(!itemInCart(newItem)){
                    tmpCart.push(newItem);
                    setCart(tmpCart);
                    setPrice(price+=parseFloat(newItem.price));
                    //has to because adds 2 on first click instead of 1 ???
                    setPrice(price-= parseFloat(newItem.price))
                }
                newItem.cartCount++;
                setPrice(price+=parseFloat(newItem.price));
            }
        return ('')})

        setCart([...tmpCart]);
    }
    function itemInCart(item){
        for(let x of tmpCart)
            if(x === item)
                return true;
        return false;
    }
    
    function filterItems(type){
        types.map(function(newType){
                if(newType === 'all items')
                    setFitems(items);
                else{
                    if(newType === type){
                        if(newType === type){
                            console.log(type);
                            const newItems = items.filter(function(newItem){
                                return newItem.type === type;
                            })
                            setFitems(newItems);
                        }
                    }
                }       
        return ('none')})
    }
    //total priceCart
    let [price, setPrice] = useState(0);

    function handleAdd(id){
        cart.map(function(newItem){
            if(id === newItem.id){
                newItem.cartCount++;
                setPrice(price+=parseFloat(newItem.price))
            }
                console.log(newItem.price)
            return newItem;
        })

        setCart([...cart])
    }////////////////

    //"hardCoding" handleRemove
    const cartSet = new Set();
    for(let x of cart)
        cartSet.add(x);

    function handleRemove(id){
        cart.map(function(newItem){
            if(id === newItem.id){
                if(newItem.cartCount === 1){
                    for(let x of cartSet){
                        if(x.id === id)
                            cartSet.delete(x);
                    }
                    newItem.cartCount--;
                    setPrice(price-=parseFloat(newItem.price));
                    //"breaking point"
                    let tmpArray = Array.from(cartSet);
                    setCart(tmpArray);
                }
                else{
                    newItem.cartCount--;
                    setPrice(price-=parseFloat(newItem.price))
                }
            }
        return ('')}  )
    }///////////////////////////

    function handleShowCart(){
        setCartV(!cartV);
    }

    useEffect(function(){
        return (function handleShowCart(){
            if(cartV){
                setCartStyle({ display: 'none'});

            }
            else
                setCartStyle({ display: 'block'})

        }) 

    }, [cartV])
    

    return (
        <div className = 'main'>
            <RouteSwitch  items = {fitems} addItemToCart = {addItemToCart} filterItems = {filterItems} types = {types} showCart = {handleShowCart}></RouteSwitch>

            <CartView cart = {cart} price = {price} onAdd = {handleAdd} onRemove = {handleRemove} cartStyle = {cartStyle} showCart = {handleShowCart}></CartView>
        </div>
    )
}

export {Main}