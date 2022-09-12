import { Input } from "../extra/Input";

function JobItem(props){

    const {jobItemInfo, id, onChange, onDelete} = props;

    return(

        <div>

            <Input type = 'text' name = 'companyName' placeholder = 'Company name' value = {jobItemInfo.companyName} onChange = {function(e){return onChange(e, id)}}></Input>
            <Input type = 'text' name = 'title' placeholder = 'Title' value = {jobItemInfo.title} onChange = {function(e){return onChange(e, id)}}></Input>
            <Input type = 'text' name = 'from' placeholder = 'From' value = {jobItemInfo.from} onChange = {function(e){return onChange(e, id)}}></Input>
            <Input type = 'text' name = 'to' placeholder = 'To' value = {jobItemInfo.to} onChange = {function(e){return onChange(e, id)}}></Input>

            <button onClick = {function(){return onDelete(id)}}>Delete job</button>

        </div>
    )
}

export {JobItem}