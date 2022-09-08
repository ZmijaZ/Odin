import {useState} from 'react'

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

function ContactForm(){

    const [contact, setContact] = useState({address: '', email: '', number: ''});

    //contactInfo
    function onChangeHandlerAddress(e){
        console.log(e.target.value);
        setContact({...contact, address: e.target.value});
    }
    function onChangeHandlerEmail(e){
        console.log(e.target.value);
        setContact({...contact, email: e.target.value});
    }
    function onChangeHandlerNumber(e){
        console.log(e.target.value);
        setContact({...contact, number: e.target.value});
    }//

    return (

        <form id = 'contactForm' className="form">
            <h1>Contact </h1>
            <input type = 'text' placeholder="Address" onChange = {onChangeHandlerAddress}></input>
            <input type = 'text' placeholder="Email" onChange = {onChangeHandlerEmail}></input>
            <input type = 'text' placeholder="Phone number" onChange = {onChangeHandlerNumber}></input>
        </form>

    )

}

export {
    Contact,
    ContactForm
}