import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import EditCustomer from './EditCustomer'
import { asyncRemoveCustomer } from '../../redux/actions/customersAction'

import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const CustomerItem = (props) => {
    const { cust } = props

    const dispatch = useDispatch()

    //Toggling edit component  
    const [toggleEdit, setToggleEdit] = useState(false)

    const handleToggle = () => {
        setToggleEdit(!toggleEdit)
    }

    const handleRemove = (id) => {
        dispatch(asyncRemoveCustomer(id))
    }


    return (
        (toggleEdit) ? (
            <EditCustomer {...cust} handleToggle={handleToggle} />
            ) : (
            <tr key={cust._id} >
                <td> {cust.name} </td>
                <td> {cust.email} </td>
                <td> {cust.mobile} </td>
                <td> <button onClick={handleToggle} className="btn btn-outline-dark" style={{ marginRight: "20px" }} > <AiFillEdit /> </button>

                    <button onClick={() => {
                        handleRemove(cust._id)
                    }} className='btn btn-outline-danger' > <FaTrashAlt /> </button>
                </td>
            </tr>)
    )
}

export default CustomerItem