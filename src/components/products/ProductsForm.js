import { Formik, Form, Field } from "formik"
import * as yup from 'yup'


const ProductForm = (props) =>{

    const { formSubmission, name: savedName, price: savedPrice } = props

    // const formik = useFormik({
    //     initialValues: {
    //         name: (savedName) ? savedName : '',
    //         price: (savedPrice) ? savedPrice : '',
    //     },
    //     validationSchema: yup.object({
    //         name: yup.string().required('cannot leave blank'),
    //         price: yup.number().required('enter a price')
    //     }),
    //     onSubmit: (values, { resetForm }) =>{
    //         formSubmission(values, resetForm)
    //         console.log(values)
    //     }
    // })

    const initialValues = {
        name: (savedName) ? savedName : '',
        price: (savedPrice) ? savedPrice : '',
    }

    const validationSchema = yup.object({
                name: yup.string().required('cannot leave blank'),
                price: yup.number().required('enter a price')
            })

    return (
        <div>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit= {(values, { resetForm }) => {
                    console.log(values)
                    formSubmission(values, resetForm)
                }}
            >
                {({errors, touched}) => {
                    <Form> 
                        <Field type="text"
                            name="name" 
                            placeholder="enter a product"
                        />


                    </Form>
                }}

            </Formik>

            <input type="text" /> awd

            {/* <form onSubmit={formik.handleSubmit}>
                <input type='text' 
                    placeholder="product name" 
                    name='name' 
                    value={formik.values.name} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                /> 
                { formik.touched.name &&  formik.errors.name ? <span> {formik.errors.name} </span> : null } 

                <input type='text'
                    placeholder="price"
                    name='price'
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                { formik.touched.price && formik.errors.price ? <span> {formik.errors.price} </span> : null } 

                <input type='submit' value='Add' className="btn btn-success btn-sm" />
            </form> */}
        </div>
    )
}

export default ProductForm