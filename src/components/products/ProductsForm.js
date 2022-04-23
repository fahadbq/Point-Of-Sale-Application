import { Formik, Form, Field } from "formik"
import * as yup from 'yup'


const ProductForm = (props) =>{

    const { formSubmission, name: savedName, price: savedPrice } = props

    const initialValues = {
        name: (savedName) ? savedName : '',
        price: (savedPrice) ? savedPrice : '',
    }

    const validationSchema = yup.object({
        name: yup.string().required('Cannot leave blank'),
        price: yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .required('Enter a price'),
    })

    return (
        <div>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit= {(values, { resetForm }) => {
                    formSubmission(values, resetForm)
                }}
            >
                {({errors, touched}) => (
                    <Form> 
                        <Field type="text"
                            name="name" 
                            placeholder="Products name"
                        />
                        { errors.name && touched.name ? <span> {errors.name} </span> : null }

                        <Field type="text"
                            name="price"
                            placeholder="Price"
                        />
                        { errors.price && touched.price ? <span> {errors.price} </span> : null }

                        <button type="submit" className="btn btn-success btn-sm" >Add</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default ProductForm