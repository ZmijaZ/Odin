import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from './About'
import { Home } from './Home'
import { Store } from './Store'
import LinkButton from "./LinkButton";


import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const shoppingCart = <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>

function RouteSwitch(props){

    const {addItemToCart, filterItems, items, types, showCart} = props;

    return (
        <BrowserRouter>
            
            <div className = 'header'>
                <h1><LinkButton link = '/' text = 'STORE NAME'>STORE NAME</LinkButton></h1>
                <h2><LinkButton link = '/' text = 'Home'></LinkButton></h2>
                <h2><LinkButton link = '/store' text = 'Store'></LinkButton></h2>
                <h2><LinkButton link = '/about' text = 'About'></LinkButton></h2>
                <h2 onClick = {showCart}>{shoppingCart}</h2>
            </div>
            
            <Routes>
                <Route path = '/' element = {<Home onClick = {function(){return <Link to = '/store'></Link>}}></Home>}></Route>
                <Route path = '/store' element = {<Store items = {items} addItemToCart = {addItemToCart} filterItems = {filterItems} types = {types}></Store>}></Route>
                <Route path = 'about' element = {<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    )       
}

export {RouteSwitch}