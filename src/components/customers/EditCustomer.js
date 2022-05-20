import CustomerForm from './CustomerForm'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

import { useDispatch } from "react-redux"
import { asyncEditCustomer } from '../../redux/actions/customersAction'

const EditCustomer = (props) => {
    const { handleToggle, _id, name, email, mobile } = props

    const dispatch = useDispatch()

    const formSubmission = (formData) => {
        dispatch(asyncEditCustomer(_id, formData, handleToggle))
    }

    return (
        <div>
            {/* <tr>
                <td>
                    <CustomerForm
                        name={name}
                        email={email}
                        mobile={mobile}
                        formSubmission={formSubmission}
                    /> </td>

                <td> </td>
                <td> </td>

                <td>
                    <input type='button'
                        value='Cancel'
                        onClick={handleToggle}
                    /> </td>
            </tr> */}

            <Modal isOpen={handleToggle} centered={true} size="sm" >
                <ModalHeader
                    charCode="Y"
                    toggle={handleToggle}
                >
                    Edit Customer
                </ModalHeader>
                <ModalBody>
                    <CustomerForm
                        name={name}
                        email={email}
                        mobile={mobile}
                        formSubmission={formSubmission}
                        updateButton="Update"
                    />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default EditCustomer