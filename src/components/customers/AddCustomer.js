import React, { useState } from 'react'
import CustomerForm from './CustomerForm'

import { useDispatch } from "react-redux"
import { asyncAddCustomer } from '../../reduxFiles/actions/customersAction'

const AddCustomers = (props) =>{
    const [ addToggle, setAddToggle ] = useState(false)

    const dispatch = useDispatch()

    const formSubmission = (formData, resetForm) =>{
        dispatch(asyncAddCustomer(formData, resetForm))
    }

    const handleAddToggle = () => {
        setAddToggle(!addToggle)
    }

    return (
        <div>

            { addToggle ? (
                <div> 
                    <h3> Create Customer </h3>

                    <CustomerForm 
                    formSubmission={formSubmission}
                    />
                </div>
                ) : (
                <button onClick={ handleAddToggle } className="btn btn-secondary" > Add Customers </button>) 
            }

        </div>
    )
}

export default AddCustomers