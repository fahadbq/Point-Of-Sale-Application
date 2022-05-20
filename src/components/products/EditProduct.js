import { useDispatch } from 'react-redux'
import ProductForm from './ProductsForm'
import { asyncEditProduct } from '../../redux/actions/productsAction'

import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const EditProduct = (props) => {
    const { handleToggle, _id, name, price } = props

    const dispatch = useDispatch()

    const formSubmission = (formData) => {
        dispatch(asyncEditProduct(_id, formData, handleToggle))
    }

    return (
        <Modal isOpen={handleToggle} centered={true} size="sm" >
            <ModalHeader
                charCode="Y"
                toggle={handleToggle}
            >
                Edit Customer
            </ModalHeader>
            <ModalBody>
                <ProductForm 
                    formSubmission={formSubmission} 
                    name={name} 
                    price={price} 
                    updateButton = "Update"
                />
            </ModalBody>
        </Modal>
    )
}

export default EditProduct