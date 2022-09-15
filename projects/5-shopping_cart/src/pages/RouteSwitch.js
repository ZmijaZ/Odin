import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './About'
import { Home } from './Home'
import { Store } from './Store'
import LinkButton from "./LinkButton";

import '../styles/header.css'


function RouteSwitch(props){

    const {addItemToCart, filterItems, items, types, showCart} = props;

    return (
        <BrowserRouter>
            
            <div className = 'header'>
                <h1><LinkButton link = '/' text = 'STORE NAME'>STORE NAME</LinkButton></h1>
                <h2><LinkButton link = '/' text = 'Home'></LinkButton></h2>
                <h2><LinkButton link = '/store' text = 'Store'></LinkButton></h2>
                <h2><LinkButton link = '/about' text = 'About'></LinkButton></h2>
                <h2 onClick = {showCart}>Cart</h2>
            </div>
            
            <Routes>
                <Route path = '/' element = {<Home></Home>}></Route>
                <Route path = '/store' element = {<Store items = {items} addItemToCart = {addItemToCart} filterItems = {filterItems} types = {types}></Store>}></Route>
                <Route path = 'about' element = {<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    )       
}

export {RouteSwitch}