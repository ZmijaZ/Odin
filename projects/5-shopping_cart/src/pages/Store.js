import { items } from "../components/store/items"
import { ListItems } from "../components/store/ListItems"

function Store(){

    function handleClick(id){

        const itemList = items.map(function(newItem){
            if(id === newItem.id){
                console.log(newItem.name);
            }
        })

    }

    return(
        <div className = 'store'>
            <h1>Store</h1>

            <ListItems list = {items} onClick = {handleClick}></ListItems>
        </div>
    )

}
export {Store}