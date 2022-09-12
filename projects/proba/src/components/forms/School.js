import { SchoolItem } from "./SchoolItem";

function School(props){

    const {schoolInfo, onChange, onDelete, onAdd} = props;

    const schoolItems = schoolInfo.map(function(schoolItem){

        return (
            <SchoolItem key = {schoolItem.id} id = {schoolItem.id} schoolItemInfo = {schoolItem} onChange = {onChange} onDelete = {onDelete} ></SchoolItem>
        )

    })

    return(

        <div className = 'formDiv'>

            {schoolItems}
        
            <button onClick = {onAdd}>Add school</button>

        </div>

    )
}

export {School}