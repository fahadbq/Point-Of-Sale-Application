import { Formik, Form, Field } from "formik"
import * as yup from 'yup'

const CustomerForm = (props) =>{
    const { formSubmission, name: savedName, mobile: savedMobile, email: savedEmail  } = props

    const initialValues = {
        name: (savedName) ? savedName : '',
        mobile: (savedMobile) ? savedMobile : '',
        email: (savedEmail) ? savedEmail : '',
    }

    const validationSchema =  yup.object({
        name: yup.string().required('Cannot leave blank'),
        mobile: yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Number must be 10 digits')
            .max(10, 'Number must be 10 digits')
            .required('Required number'),
        email: yup.string().email('Invalid Email'),
    })

    return (
        <div>
            <Formik 
                initialValues={initialValues}
                validationSchema = {validationSchema}
                onSubmit= {(values, { resetForm }) => {
                    console.log(values)
                    formSubmission(values, resetForm)
                }}
            >

                { ({ errors, touched}) => (
                    <Form >
                        <Field type="text" 
                            name="name"
                            placeholder="Customers name"
                            className="form-control"
                        />
                        { errors.name && touched.name ? <span className="form-text" style={{color: "red"}} > {errors.name} </span> : null } <br />

                        <Field type="text"
                            name="mobile"
                            placeholder="Phone number"
                            className="form-control"
                        />
                        { errors.mobile && touched.mobile ? <span className="form-text" style={{color: "red"}} > {errors.mobile} </span> : null } <br />

                        <Field type="email"
                            name="email"
                            placeholder="email"
                            className="form-control"
                        />
                        { errors.email && touched.email ? <span className="form-text" style={{color: "red"}} > {errors.email} </span> : null } <br />

                        <button type="submit" className="btn btn-primary d-grid gap-2 col-12" > Add </button>
                    </Form>
                )}

            </Formik>
            
        </div>
    )
}

export default CustomerForm