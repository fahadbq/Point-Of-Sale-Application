import React, { useState } from 'react'
import CustomerForm from './CustomerForm'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'

import { useDispatch } from "react-redux"
import { asyncAddCustomer } from '../../reduxFiles/actions/customersAction'

const AddCustomers = (props) => {
    const [ addModal, setAddModal] = useState(false)

    const dispatch = useDispatch()

    const formSubmission = (formData, resetForm) => {
        dispatch(asyncAddCustomer(formData, resetForm))
    }

    const handleAddToggle = () => {
        setAddModal(!addModal)
    }

    return (
        <div>
            <Button
                color="success"
                onClick={handleAddToggle}
                style={{ display: 'inline-block', float: 'right' }}
            >
                Add Customers
            </Button>
            <Modal isOpen={addModal} centered={true} size="sm" >
                <ModalHeader
                    charCode="Y"
                    toggle={handleAddToggle}
                >
                    <h4> Create Customer </h4>
                </ModalHeader>
                <ModalBody>
                    <CustomerForm
                        formSubmission={formSubmission}
                        addButton ='Add'
                    />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddCustomers