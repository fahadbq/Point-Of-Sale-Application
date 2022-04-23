import { useState } from 'react'
import { useDispatch } from "react-redux"
import { asyncAddProduct } from '../../reduxFiles/actions/productsAction'
import ProductForm from "./ProductsForm"



const AddProduct = (props) =>{
    const [ addToggle, setAddtoggle ] = useState(false)
    
    const handleAddToggle = () => {
        setAddtoggle(!addToggle)
    }

    const dispatch = useDispatch()

    const formSubmission = (formData, resetForm) =>{ 
        dispatch(asyncAddProduct(formData, resetForm))
    }

    return (
        <div>
            
            { addToggle ? (
                <div> 
                    <h3> Create Products </h3>

                    <ProductForm 
                    formSubmission={formSubmission} 
                    />
                </div>
                ) : (
                <button onClick={handleAddToggle} className='btn btn-secondary' > Add Products </button>) 
            }

        </div>
    )
}

export default AddProduct