
const StatsItem = (props) => {

    const { title, totalData } = props

    return (    
        <div className="card text-dark bg-success mb-4" style={{maxWidth: "15rem"}}>

            <div className="card-body text-dark">
                <h4> { totalData } </h4>
            </div>

            <div className="card-header text-light"> 
                <h3> {title} </h3> 
            </div>

        </div>
    )
}

export default StatsItem