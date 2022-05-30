import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncRegisterUser } from '../redux/actions/usersAction'

//images
import PngImage from '../assets/PngImage.png'

const Register = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        username: "",
        email: "",
        businessName: "",
        address: "",
        password: ""
    }

    const registerSchema = yup.object({
        username: yup.string()
            .max(15, "Must be 15 character or less")
            .required('Cannot leave blank'),
        email: yup.string()
            .email('Invalid email address')
            .required('Cannot leave blank'),
        password: yup.string()
            .min(8, "Must be more than 8 character")
            .required('Password required'),
    })

    //Re-directing user to login page
    const handleClick = () =>{
        navigate('/login')
    }

    return (
        <div className="border shadow p-3 mb-5 bg-body rounded" style={{ position: "fixed", width: "360px", top: '120px', left: "90px" }} >

            <h3> Sign Up </h3> <br />

            <Formik 
                initialValues = {initialValues}
                validationSchema = {registerSchema}
                onSubmit = { (values, { resetForm }) =>{
                    console.log(values)

                    //call back func for pushing path
                    const pushPath = () => {
                        navigate('/login')
                    }

                    dispatch(asyncRegisterUser(values, pushPath, resetForm))
                }}
            >
                { ( {errors, touched, isValid, dirty} ) => (
                    <Form>
                        <div className='mb-3'>
                            <Field type="text" 
                                name="username" 
                                placeholder="Username" 
                                className="form-control" 
                            />

                            { errors.username && touched.username ? <span className="form-text" style={{color: 'red'}} > {errors.username} </span> : null }
                        </div>

                        <div className='mb-3'>
                            <Field type="email" 
                                name="email" 
                                placeholder="Email" 
                                className="form-control" 
                            />

                            { errors.email && touched.email ? <span className="form-text" style={{color: 'red'}} > {errors.email} </span> : null }
                        </div>

                        <div className='mb-3'>
                            <Field type="text" 
                                name="businessName" 
                                placeholder="BusinessName" 
                                className="form-control" 
                            />
                        </div>

                        <div className='mb-3'>
                            <Field type="text" 
                                name="address" 
                                placeholder="Address" 
                                className="form-control" 
                            />
                        </div>

                        <div className='mb-3'>
                            <Field type="password" 
                                name="password" 
                                placeholder="Password" 
                                className="form-control" 
                            />

                            { errors.password && touched.password ? <span className="form-text" style={{color: 'red'}} > {errors.password} </span> : null }
                        </div>

                        <div className="d-grid gap-2 col-12">
                            <button type="submit" 
                                disabled={ !dirty || !isValid }
                                className="btn btn-primary btn-sm" > Register </button>
                        </div>
                    </Form>
                )}

            </Formik>

            <small> Already have an account ? <button onClick={handleClick} className="btn btn-link btn-sm" > Log In </button> </small>

            <div style={{ position: "fixed", top: '160px', right: "200px", maxWidth: "700px" }} >
                <img className="img-fluid width: 50% \9" src={PngImage} alt="loginImage" />
            </div>
        </div>
    )
}

export default Register