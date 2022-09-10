import { Section } from "../extra/Section";
import { SchoolItem } from "./SchoolItem";

function School(props){

    const {schoolInfo, onChange, onAdd, onDelete} = props;

    const schoolItems = schoolInfo.map(function(newItem){
        return(
            <SchoolItem key = {newItem.id} id = {newItem.id} schoolItemInfo = {newItem} onChange = {onChange} onDelete = {onDelete}></SchoolItem>
        )
    })

    return(

        <Section title = 'School info'>
            {schoolItems}
            <button onClick = {onAdd}>Add school</button>
        </Section>
    )
}

export {School}