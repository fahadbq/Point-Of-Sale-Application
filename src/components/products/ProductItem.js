import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import EditProduct from '../products/EditProduct'
import { asyncDeleteProduct } from '../../redux/actions/productsAction'

import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const ProductItem = (props) =>{
    const [ toggle, setToggle ] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }

    const { prod } = props

    const dispatch = useDispatch()

    const handleClick = (id) =>{
        dispatch(asyncDeleteProduct(id))
    }


    return (
        (toggle) ? (<EditProduct {...prod} handleToggle={handleToggle} />
        ) : (
        <tr key={prod._id} >
            <td> {prod.name } </td>
            <td> ${prod.price } </td>
            <td> ${prod.price } </td>
            <td> <button onClick={handleToggle} className="btn btn-outline-dark" style={{ marginRight: "20px" }} > <AiFillEdit /> </button> 

                <button onClick={ () =>{
                    handleClick(prod._id)
                } } className="btn btn-outline-danger" > <FaTrashAlt /> </button> 
            </td>
        </tr>)
        
    )
}

export default ProductItem