

function Home(props){

    const {onClick} = props;

    return(
        <div className="home">
            <button onClick = {onClick}>SHOP NOW</button>
        </div>
    )
}

export {Home}