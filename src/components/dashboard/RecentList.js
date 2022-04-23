import { useState, useEffect } from 'react'

const RecentList = (props) => { 
    const [ getData, setGetData ] = useState([])
    const { title, storeData } = props

    useEffect(() =>{
        setGetData([...storeData.data])
    }, [storeData.data])

    return (
        <div className="card bg-secondary mb-4" style={{height: "220px", maxWidth: "18rem"}} >
            <div className="card-header text-white ">
                <h3> {title} </h3>
            </div>

            <div className="card-body text-white">
                <ol>
                    { getData.length > 0 && 
                        getData.slice(-5).reverse().map((ele) =>{
                        return <li key={ele._id} > {ele.name} </li>
                    }) }
                </ol>
            </div>
        </div>
    )
}

export default RecentList

//work on it tomorrow