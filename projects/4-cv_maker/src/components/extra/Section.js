
function Section(props){

    //important to put children in order to see them later on!
    const {title, children} = props;

    return(
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )

}

export {Section}