
import {Link} from 'react-router-dom'

function LinkButton(props){

    const {link, text} = props;

    return(
        <Link className = 'link' to = {link}>
            <span className = 'span'>{text}</span>
        </Link>
    )
}

export default LinkButton