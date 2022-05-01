import { Formik, Form, Field } from "formik"
import * as yup from 'yup'


const ProductForm = (props) =>{

    const { formSubmission, name: savedName, price: savedPrice, addButton, updateButton } = props

    const initialValues = {
        name: (savedName) ? savedName : '',
        price: (savedPrice) ? savedPrice : '',
    }

    const validationSchema = yup.object({
        name: yup.string().required('Cannot leave blank'),
        price: yup.string()
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
                        {savedName && <label> Products name </label> }
                        <Field type="text"
                            name="name" 
                            placeholder="Products name"
                            className="form-control"
                        /> 
                        { errors.name && touched.name ? <span className="form-text" style={{color: "red"}}> {errors.name} </span> : null } <br />

                        {savedPrice && <label> Price </label> }
                        <Field type="text"
                            name="price"
                            placeholder="Price"
                            className="form-control"
                        />
                        { errors.price && touched.price ? <span className="form-text" style={{color: "red"}} > {errors.price} </span> : null } <br />

                        <button type="submit" className="btn btn-primary d-grid gap-2 col-12" > { addButton ? addButton : updateButton } </button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default ProductForm