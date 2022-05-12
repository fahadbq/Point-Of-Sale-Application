import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import BillsTable from './BillsTable'
import Pagination from '../../helperComponents/PaginationComponent'

const BillsList = (props) => {
    const [ cloneData, setCloneData ] = useState([]) 

    const [ currentPage, setCurretPage ] = useState(1)
    const [ dataPerPage ] = useState(6)

    const { bills } = useSelector(state => state)

    useEffect(() =>{
        setCloneData([...bills.data].reverse())
    }, [bills.data])

    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage

    //Clone paginate data

    const paginateCloneData = cloneData.slice(indexOfFirstData, indexOfLastData)

    const paginateFunc = (paginateNum) => {

        setCurretPage(paginateNum)
    }

    return ( 
        <div style={{ position: "absolute", left: "60px", top: "105px", width: "900px" }} >
            { bills.length === 0 ? 
            (<h4> No bills Found </h4>
            ) : (
                <div className="border shadow-sm p-3 mb-5 bg-body rounded" > 
                    <h2 style={{color: "#787878"}} > Bills - {bills.data.length} </h2>

                    <BillsTable cloneData={paginateCloneData} />

                    <Pagination dataPerPage={dataPerPage} totalData={cloneData.length} paginateFunc={paginateFunc} />
                </div>)
            }
        </div>
    )
}

export default BillsList