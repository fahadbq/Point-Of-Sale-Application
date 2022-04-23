import { useFormik } from "formik"
import * as yup from 'yup'

const CustomerForm = (props) =>{
    const { formSubmission, name: savedName, mobile: savedMobile, email: savedEmail  } = props

    const formik = useFormik({
        initialValues: {
            name: (savedName) ? savedName : '',
            mobile: (savedMobile) ? savedMobile : '',
            email: (savedEmail) ? savedEmail : '',
        },
        validationSchema: yup.object({
            name: yup.string().required('cannot leave blank'),
            mobile: yup.number().min(10, 'Note - Mobile number must be 10 digits').required('Required number'),
            email: yup.string().email('invalid Email'),
        }),
        onSubmit: (values, { resetForm }) =>{
            formSubmission(values, resetForm)
        }
    })

    return (
        <div>

            <form onSubmit={formik.handleSubmit}>
                <input
                    type='text'
                    placeholder="name"
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /> 
                { formik.touched.name && formik.errors.name ? <span> {formik.errors.name} </span> : null }

                <input
                    type='text'
                    placeholder="phone number"
                    name='mobile'
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /> 
                { formik.touched.mobile && formik.errors.mobile ? <span> {formik.errors.mobile} </span> : null }

                <input
                    type='email'
                    placeholder="email"
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /> 
                { formik.touched.email && formik.errors.email ? <span> {formik.errors.email} </span> : null }

                <input 
                    type='submit'
                    value='Submit'

                    className="btn btn-primary btn-sm"
                />
                
            </form>
            
        </div>
    )
}

export default CustomerForm