import React, { useState, useEffect } from 'react'
import Pagination from '../../helperComponents/PaginationComponent'
import SearchFuncComponent from '../../helperComponents/SearchFuncComponent'
import { useSelector } from 'react-redux'
import ProductsTable from './ProductsTable'

const ProductsList = (props) =>{
    const [ cloneData, setCloneData ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ dataPerPage ] = useState(6)

    const { products } = useSelector((state) => state )

    useEffect( () => {
        setCloneData([...products.data].reverse())
    }, [products.data])

    //Page pagination
    const indexOfLastData = currentPage * dataPerPage  // (1 * 5)
    const indexOfFirstData = indexOfLastData - dataPerPage // (5 - 5)
    //copy original data 
    const paginateCloneData = cloneData.slice(indexOfFirstData, indexOfLastData) //(0, 5 )
    
    //Change Page
    const paginateFunc = (pageNumber) => {

        setCurrentPage(pageNumber)
    }

    return (
        <div>
            { products.data.length === 0 ? (<div> 
                <h4> No products found </h4> 
                <p> Add products to get started </p> 
                </div>
                )  : ( 
                <div> 

                    <SearchFuncComponent setCloneData={setCloneData} originalData={products} />

                    <h2 style={{color: "#787878"}} > List of products - ({products.data.length}) </h2> 

                    <ProductsTable cloneData={paginateCloneData} /> 

                    <Pagination dataPerPage={dataPerPage} totalData={ cloneData.length } paginateFunc={paginateFunc} />

                </div> ) 
            }

        </div>
    )
}

export default ProductsList