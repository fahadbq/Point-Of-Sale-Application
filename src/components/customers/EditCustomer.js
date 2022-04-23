import CustomerForm from './CustomerForm'

import { useDispatch } from "react-redux"
import { asyncEditCustomer } from '../../reduxFiles/actions/customersAction'

const EditCustomer = (props) =>{
    const { handleToggle, _id, name, email, mobile } = props

    const dispatch = useDispatch()

    const formSubmission = (formData) =>{
        dispatch(asyncEditCustomer(_id, formData, handleToggle))
    }

    return (
        <tr>
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
        </tr>
    )
}

export default EditCustomer