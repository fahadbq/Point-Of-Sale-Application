import React, { useState } from 'react'
import CustomerForm from './CustomerForm'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'

import { useDispatch } from "react-redux"
import { asyncAddCustomer } from '../../redux/actions/customersAction'

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
                style={{ display: 'inline-block', float: 'right', marginBottom: "50px" }}
            >
                Add Customers
            </Button>
            <Modal isOpen={addModal} centered={true} size="sm" >
                <ModalHeader
                    toggle={handleAddToggle}
                >
                    Create Customer
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