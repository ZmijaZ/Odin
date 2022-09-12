
import { Input } from "../extra/Input";

function SchoolItem(props){

    const {schoolItemInfo, onChange, onDelete, id} = props;

    return(

        <div className = 'formDiv'>
            <Input type = 'text' name = 'schoolName' value = {schoolItemInfo.schoolName} placeholder = 'School name' onChange = {function(e){return onChange(e, id)}}></Input> 
            <Input type = 'text' name = 'major' value = {schoolItemInfo.major} placeholder = 'Major' onChange = {function(e){return onChange(e, id)}}></Input> 
            <Input type = 'text' name = 'from' value = {schoolItemInfo.from} placeholder = 'From' onChange = {function(e){return onChange(e, id)}}></Input> 
            <Input type = 'text' name = 'to' value = {schoolItemInfo.to} placeholder = 'to' onChange = {function(e){return onChange(e, id)}}></Input>

            <button onClick = {function(){return onDelete(id)}}>Delete school</button>
        </div>
    )
}

export {SchoolItem}