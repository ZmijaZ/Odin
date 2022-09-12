import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './About'
import { Home } from './Home'
import { Store } from './Store'


function RouteSwitch(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home/>}></Route>
                <Route path = '/store' element = {<Store/>}></Route>
                <Route path = 'about' element = {<About/>}></Route>
            </Routes>
        </BrowserRouter>
    )       
}

export {RouteSwitch}