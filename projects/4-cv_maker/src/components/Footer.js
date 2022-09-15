
import '../styles/header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const gitHub = <FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon>

function Footer(){

    return (
        <div className = 'footer'>

            <h2>Copyright <span> ZmijaZ {gitHub} </span>  </h2>
            

        </div>
    )
}
export {Footer}