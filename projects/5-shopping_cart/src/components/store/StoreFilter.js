
function StoreFilter(props){

    const {items, onClick} = props;

    const typeSet = new Set();
    const types = [];

    for(let item of items)
        typeSet.add(item.type);
    for(let x of typeSet)
        types.push(x);


    const allTypes = types.map(function(newItem){
        return(
            <div key = {newItem} className = 'type'>
                <h2 onClick = {function(type){return onClick(type)}}>{newItem}</h2>
            </div>
        )
    })

    return (

        <div className = 'storeFilter'>
            <h1>Filter</h1>
            {allTypes}
        </div>

    )
}

export {StoreFilter}