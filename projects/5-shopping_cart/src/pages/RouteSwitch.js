import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './About'
import { Home } from './Home'
import { Store } from './Store'


function RouteSwitch(props){

    const {addItemToCart, filterItems, items} = props;

    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home></Home>}></Route>
                <Route path = '/store' element = {<Store items = {items} addItemToCart = {addItemToCart} filterItems = {filterItems}></Store>}></Route>
                <Route path = 'about' element = {<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    )       
}

export {RouteSwitch}