import { Navigate } from 'react-router-dom'

//HOC - Higher Order Component

const PrivateRoute = ({ component: Component}) =>{

    return localStorage.getItem('token') ? ( <Component /> ) : ( <Navigate to='/login'/> )
}

export default PrivateRoute