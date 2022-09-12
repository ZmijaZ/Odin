import { JobItem } from "./JobItem";

function Job(props){

    const {jobInfo, onChange, onAdd, onDelete} = props;

    const jobItems = jobInfo.map(function(newItem){

        return <JobItem id = {newItem.id} key = {newItem.id} jobItemInfo = {newItem} onChange = {onChange} onDelete = {onDelete}></JobItem>

    })

    return(

        <div className = 'formDiv'>

            {jobItems}
            <button onClick = {onAdd}>Add job</button>

        </div>
    )
}

export {Job}