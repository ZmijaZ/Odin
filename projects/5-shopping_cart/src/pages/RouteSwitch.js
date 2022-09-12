import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './About'
import { Home } from './Home'
import { Store } from './Store'


function RouteSwitch(props){

    const {addItemToCart} = props;

    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home></Home>}></Route>
                <Route path = '/store' element = {<Store addItemToCart = {addItemToCart}></Store>}></Route>
                <Route path = 'about' element = {<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    )       
}

export {RouteSwitch}