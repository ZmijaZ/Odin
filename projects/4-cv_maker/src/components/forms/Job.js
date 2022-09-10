import { Section } from "../extra/Section";
import { JobItem } from "./JobItem";

function Job(props){

    const {jobInfo, onChange, onAdd, onDelete} = props;

    const jobItems = jobInfo.map(function(newItem){

        return (
            <JobItem key = {newItem.id} id = {newItem.id} jobItemInfo = {newItem} onChange = {onChange} onDelete = {onDelete}></JobItem>
        )

    })

    return(

        <Section title = 'Job info'>
            {jobItems}
            <button onClick = {onAdd}>Add job</button>
        </Section>
    )
}

export {Job}