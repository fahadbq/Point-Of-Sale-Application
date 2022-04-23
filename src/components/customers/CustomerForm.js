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
                        />
                        { errors.name && touched.name ? <span> {errors.name} </span> : null }

                        <Field type="text"
                            name="mobile"
                            placeholder="Phone number"
                        />
                        { errors.mobile && touched.mobile ? <span> {errors.mobile} </span> : null }

                        <Field type="email"
                            name="email"
                            placeholder="email"
                        />
                        { errors.email && touched.email ? <span> {errors.email} </span> : null }

                        <button type="submit" className="btn btn-primary btn-sm" > Add </button>
                    </Form>
                )}

            </Formik>
            
        </div>
    )
}

export default CustomerForm