import { useState } from "react";



function Personal(props){

    const {name, title} = props.personal;

    // const [personal, setPersonal] = useState({name: '', title: ''});


    // //personalInfo
    // function onChangeHandlerName(e){
    //     console.log(e.target.value);
    //     setPersonal({...personal, name: e.target.value});
    // }
    // function onChangeHandlerTitle(e){
    //     console.log(e.target.value);
    //     setPersonal({...personal, title: e.target.value});
    // }//


    return(
        <div>

            {/* <form id = 'personalForm'>
                <input type = 'text' placeholder="Name"  onChange = {onChangeHandlerName}></input>
                <input type = 'text' placeholder="Title" onChange = {onChangeHandlerTitle}></input>
            </form> */}


            <div id = 'personalDiv' className = 'cvDiv'>

                <h1>{name}</h1>
                <h2>{title}</h2>

            </div>

        </div>

    )

}

export {Personal}

