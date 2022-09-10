import { Input } from "../extra/Input"

function SchoolItem(props){

    const {id, schoolItemInfo, onChange, onDelete} = props;

    return(

        <div>

            <Input type = 'text' name = 'schoolName' value = {schoolItemInfo.schoolName} placeholder = 'School name' onChange = {function(e) {return onChange(e, id)}}></Input>
            <Input type = 'text' name = 'degree' value = {schoolItemInfo.degree} placeholder = 'Degree' onChange = {function(e) {return onChange(e, id)}}></Input>
            <Input type = 'text' name = 'major' value = {schoolItemInfo.major} placeholder = 'Major' onChange = {function(e) {return onChange(e, id)}}></Input>
            <Input type = 'text' name = 'from' value = {schoolItemInfo.from} placeholder = 'From' onChange = {function(e) {return onChange(e, id)}}></Input>
            <Input type = 'text' name = 'to' value = {schoolItemInfo.to} placeholder = 'To' onChange = {function(e) {return onChange(e, id)}}></Input>

            <button className="deleteButton" onClick = {function() {return onDelete(id)}}>Delete school item</button>

        </div>

    )
}
export {SchoolItem}