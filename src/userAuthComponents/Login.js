import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncLoginUser } from '../redux/actions/usersAction'

//images
import PngImage from '../assets/PngImage.png'

const Login = (props) =>{
    const { handleAuth } = props

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: ''
    }

    const loginSchema = yup.object({
        email: yup.string()
            .email('Invalid Email')
            .required('Cannot be blank'),
        password: yup.string()
            .min(5, 'Must be more than 5 characters')
            .required('Cannot be blank')
    })

    //Re-directing user to register page
    const handleClick = () =>{
        navigate('/register')
    }

    return (
        <div className="border shadow p-3 mb-5 bg-body rounded" style={{ position: "fixed", width: "330px", top: '120px', left: "90px" }} >

            <h3> Login </h3> <br />

            <Formik 
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit= {(values, { resetForm }) =>{

                    //push to account after logging in successfully 
                    const pushPath = () =>{
                        return navigate('/account')
                    }
                    
                    dispatch(asyncLoginUser(values, pushPath, handleAuth, resetForm))
                }} 
            >
                { ({errors, touched, isValid, dirty}) => (
                    <Form>

                        <div > 
                            <Field type="text" 
                                name="email" 
                                placeholder="Enter your email" 
                                className="form-control" 
                            />

                            { errors.email && touched.email ? <span className='form-text' style={{color: 'red'}} > {errors.email} </span> : null } 
                            <br />
                        </div>

                        <div > 
                            <Field type="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                className="form-control" 
                            />
                            
                            { errors.password && touched.password ? <span className='form-text' style={{color: 'red'}} > {errors.password} </span> : null } 
                            <br/>
                        </div>

                        <div className="d-grid gap-2 col-12">
                            <button type="submit" className="btn btn-primary btn-sm" disabled={ !dirty || !isValid } > Submit </button>
                        </div>

                    </Form>
                )}

            </Formik>

            <button onClick={handleClick} className="btn btn-link btn-sm" > Create New Account </button>
            
            <div style={{ position: "fixed", top: '160px', right: "200px", maxWidth: "700px" }} >
                <img className="img-fluid width: 50% \9" src={PngImage} alt="loginImage" />
            </div>

        </div>
    )
}

export default Login