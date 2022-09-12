import { useState } from "react";
import { items } from "../components/store/items";
import { ListItems } from "../components/store/ListItems";

function Store(props){

    const {addItemToCart} = props;

    return(
        <div className = 'store'>
            <h1>Store</h1>

            <ListItems list = {items} onClick = {addItemToCart}></ListItems>
        </div>
    )

}
export {Store}