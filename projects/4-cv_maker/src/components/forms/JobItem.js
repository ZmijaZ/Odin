import { Input } from "../extra/Input";

function JobItem(props){

    const {id, jobItemInfo, onChange, onDelete} = props;

    return(

        <div>
            <Input type = 'text' name = 'companyName' value = {jobItemInfo.companyName} placeholder = 'Company name' onChange = {function(e) {return(onChange(e, id))}}></Input>
            <Input type = 'text' name = 'title' value = {jobItemInfo.title} placeholder = 'Title' onChange = {function(e) {return(onChange(e, id))}}></Input>
            <Input type = 'text' name = 'from' value = {jobItemInfo.from} placeholder = 'From' onChange = {function(e) {return(onChange(e, id))}}></Input>
            <Input type = 'text' name = 'to' value = {jobItemInfo.to} placeholder = 'To' onChange = {function(e) {return(onChange(e, id))}}></Input>

            <button className="deleteButton" onClick = {function(){return onDelete(id)}}>Delete job</button>
         

        </div>
    )
}

export {JobItem}