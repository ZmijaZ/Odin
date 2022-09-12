import { Item } from "./Item";

function ListItems(props){

    const {list, onClick} = props;

    const items = list.map(function(newItem){
        return(
            <Item key = {newItem.id} id = {newItem.id} itemInfo = {newItem} onClick = {onClick}></Item>
        )
    })

    return(
        <div className = 'listItems'>
            {items}
        </div>
    )
    
}
export {ListItems}