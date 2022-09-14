
import { ListItems } from "../components/store/ListItems";
import { StoreFilter } from '../components/store/StoreFilter'

function Store(props){

    const {addItemToCart, filterItems, items, types} = props;

    return(
        <div className = 'store'>
            <h1 id = 'storeH1'>Store</h1>

            <div id = 'flex'>
                <StoreFilter onClick = {filterItems} types = {types}></StoreFilter>
                <ListItems list = {items} onClick = {addItemToCart}></ListItems>
            </div>
        </div>
    )

}
export {Store}