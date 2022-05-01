import React, { useState } from 'react'
import CustomerForm from './CustomerForm'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'

import { useDispatch } from "react-redux"
import { asyncAddCustomer } from '../../reduxFiles/actions/customersAction'

const AddCustomers = (props) => {
    const [ modal, setModal ] = useState(false)

    const dispatch = useDispatch()

    const formSubmission = (formData, resetForm) => {
        dispatch(asyncAddCustomer(formData, resetForm))
    }

    const toggle = () => {
        setModal(!modal)
    }

    return (
                <div>
                    <Button
                        color="success"
                        onClick={toggle}
                        style={{ display:'inline-block', float: 'right' }} 
                    >
                        Add Customers
                    </Button>
                    <Modal isOpen={modal} centered={true} size="sm" >
                        <ModalHeader
                            charCode="Y"
                            toggle={toggle}
                        >
                            <h4> Create Customer </h4>
                        </ModalHeader>
                        <ModalBody>
                            <CustomerForm
                                formSubmission={formSubmission}
                            />
                        </ModalBody>
                    </Modal>
                </div>
            )
}

export default AddCustomers