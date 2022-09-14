import { useState } from 'react'
import { RouteSwitch } from "../pages/RouteSwitch";
import { Header } from "./Header";
import { CartView } from "./cart/CartView";
import { items } from './store/items';

import '../styles/main.css'

const tmpCart = [];

function Main(){

    const [cart, setCart] = useState([]);
    const [fitems, setFitems] = useState(items);

    //filterTypes
    const typeSet = new Set();
    const types = ['all items'];

    for(let item of items)
        typeSet.add(item.type);
    for(let x of typeSet)
        types.push(x);
    //////////////

    //total priceCart
    let [price, setPrice] = useState(0);
    

    //

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
                console.log(newItem.price)
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
                        const newItems = prevState.filter(function(newItem){
                            return id !== newItem.id
                        })
                        return ([...cart, newItems])
                    })
                }
                else 
                    newItem.cartCount--;
            }

        })

        setCart([...cart])

    }

    // function handleDeleteSchool(id){
    //     setCv(function(prevState){

    //         const schoolItems = prevState.schoolInfo.filter(function(newItem){
    //             return id !== newItem.id;
    //         })
    //         return({...prevState, schoolInfo: [...schoolItems]});
    //     })
    // }


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

    return (
        <div className = 'main'>
            <RouteSwitch items = {fitems} addItemToCart = {addItemToCart} filterItems = {filterItems} types = {types}></RouteSwitch>

            <CartView cart = {cart} price = {price} onAdd = {handleAdd} onRemove = {handleRemove}></CartView>
        </div>
    )
}

export {Main}