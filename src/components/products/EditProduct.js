import { useDispatch } from 'react-redux'
import ProductForm from './ProductsForm'
import { asyncEditProduct } from '../../reduxFiles/actions/productsAction'

const EditProduct = (props) => {
    const { handleToggle, _id, name, price } = props

    const dispatch = useDispatch()

    const formSubmission = (formData) => {
        dispatch(asyncEditProduct(_id, formData, handleToggle))
    }

    return (
        <tr>
            <td><ProductForm formSubmission={formSubmission} name={name} price={price} /></td>

            <td> </td>
            <td> <button onClick={ handleToggle } > Cancel </button> </td>
        </tr>
    )
}

export default EditProduct