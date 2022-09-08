
function Contact(props){

    const {address, email, number} = props.contact;

    return(

        <div id = 'contactDiv' className = 'cvDiv'>

            <h1>Contact:</h1>

            <h3>{address}</h3>
            <h3>{email}</h3>
            <h3>{number}</h3>
        </div>
    )

}

export {Contact}