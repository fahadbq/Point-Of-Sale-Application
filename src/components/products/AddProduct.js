import { useState } from 'react'
import { useDispatch } from "react-redux"
import { asyncAddProduct } from '../../redux/actions/productsAction'
import ProductForm from "./ProductsForm"

import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'



const AddProduct = (props) => {
    const [addModal, setAddModal] = useState(false)

    const handleAddToggle = () => {
        setAddModal(!addModal)
    }

    const dispatch = useDispatch()

    const formSubmission = (formData, resetForm) => {
        dispatch(asyncAddProduct(formData, resetForm))
    }

    return (
        <div>
            <Button
                color="success"
                onClick={handleAddToggle}
                style={{ display: 'inline-block', float: 'right',}}
            >
                Add Products
            </Button>
            <Modal isOpen={addModal} centered={true} size="sm" >
                <ModalHeader
                    toggle={handleAddToggle}
                >
                    Create Product
                </ModalHeader>
                <ModalBody>
                    <ProductForm 
                        formSubmission={formSubmission}
                        addButton = 'Add'
                    />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddProduct