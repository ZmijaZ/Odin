import { FilterType } from "./FilterType";

function StoreFilter(props){

    const {onClick, types} = props;


    const newTypes = types.map(function(newItem){
        return(
            <FilterType key = {newItem} id = {newItem} type = {newItem} onClick = {onClick} ></FilterType>
        )
    })

    return (

        <div className = 'storeFilter'>
            <h1>Filter</h1>
            {newTypes}
        </div>

    )
}

export {StoreFilter}