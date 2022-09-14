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

    const typeSet = new Set();
    const types = ['all items'];

    for(let item of items)
        typeSet.add(item.type);
    for(let x of typeSet)
        types.push(x);

    console.log(types)


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
                
        })

    }

    return (
        <div className = 'main'>

            
            <RouteSwitch items = {fitems} addItemToCart = {addItemToCart} filterItems = {filterItems} types = {types}></RouteSwitch>

            <CartView cart = {cart} onAdd = {handleAdd} onRemove = {handleRemove}></CartView>
        </div>
    )
}

export {Main}