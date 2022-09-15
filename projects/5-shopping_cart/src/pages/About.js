
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const gitHub = <FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon>
const facebook = <FontAwesomeIcon icon = {faFacebookF}></FontAwesomeIcon>
const twitter = <FontAwesomeIcon icon = {faTwitter}></FontAwesomeIcon>
const instagram = <FontAwesomeIcon icon = {faInstagram}></FontAwesomeIcon>

function About(){


    return(
        <div className = 'about'>
            <div className = 'aboutDiv1'>
                <h1><a href = 'https://github.com/ZmijaZ'>{gitHub}</a></h1>
                <h1><a href = 'https://www.facebook.com'>{facebook}</a></h1>
                <h1><a href = 'https://www.twitter.com'>{twitter}</a></h1>
                <h1><a href = 'https://www.instagram.com'>{instagram}</a></h1>
            </div>

            <div className = 'aboutDiv2'>
                <h2>StoreName</h2>
                <h2>Rodeo Drive 42, Los Angeles USA</h2>
            </div>
        </div>
    )
}
export {About}