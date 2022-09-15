import { Link } from "react-router-dom";


function Home(props){

    const {onClick} = props;

    return(
        <div className="home">
            <h1>Some text about how <span>great</span> are the <span>website</span> and the <span>shop</span> itself</h1>
            <Link to = '/store'>
                <button onClick = {onClick}>SHOP NOW</button>
            </Link>
        </div>
    )
}

export {Home}