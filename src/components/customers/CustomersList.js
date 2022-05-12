import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SearchFuncComponent from '../../helperComponents/SearchFuncComponent'
import Pagination from '../../helperComponents/PaginationComponent'
import CustomersTable from './CustomersTable'

const CustomersList = (props) =>{
    const [ cloneData, setCloneData ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ dataPerPage ] = useState(6)

    const { customers } = useSelector((state) => state)

    //Want deep copy in the first interation
    useEffect(() => {
        setCloneData([...customers.data].reverse())
    }, [customers.data])

    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage

    //clone data for paginate
    const paginateCloneData = cloneData.slice(indexOfFirstData, indexOfLastData)

    const paginateFunc = (paginateNum) => {

        setCurrentPage(paginateNum)
    }

    return (
        <div>
            { customers.data.length === 0 ? 
            (<div> <h3> No customers found </h3> <p> Add your first customer </p> </div>
            ) : (<div> 

                    <SearchFuncComponent setCloneData={setCloneData} originalData={customers} />

                    <h2 style={{color: "#787878"}} > List of customers - ({customers.data.length}) </h2>

                    <CustomersTable cloneData={paginateCloneData} />

                    <Pagination dataPerPage={dataPerPage} totalData={cloneData.length} paginateFunc={paginateFunc} />
                </div>)
            }
        </div>
    )
}

export default CustomersList