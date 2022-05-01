import { Route, NavLink, withRouter } from 'react-router-dom'
import PrivateRoute from './../helperComponents/PrivateRoute'
import swal from 'sweetalert'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from '../components/Account'
import DashboardContainer from '../components/dashboard/DashboardContainer.js'
import CustomersContainer from '../components/customers/CustomersContainer'
import ProductsContainer from '../components/products/ProductsContainer'
import BillsContainer from '../components/bills/BillsContainer'


const Navigate = (props) =>{
    const { userLoggedIn, handleAuth } = props


    const handleLogOut = () =>{
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                localStorage.removeItem('token')
                handleAuth()
              swal("Logged out", {
                icon: "success",
              });
              props.history.push('/')
            }
          });
    }


    return (
        <div >

            { userLoggedIn ? (
                    
                <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                
                    <div className="container-fluid" >
                        <NavLink to='dashboard' className="navbar-brand nav-link active " > Dashboard </NavLink>

                        <div className="collapse navbar-collapse" >
                            <NavLink to='customers' className="navbar-brand nav-link active" > Customers </NavLink>

                            <NavLink to='products' className="navbar-brand nav-link active" > Products </NavLink>
                            
                            <NavLink to='bills' className="navbar-brand nav-link active" > Bills </NavLink>
                        </div>
                        
                        <NavLink to='/account' className="navbar-brand nav-link active" > Account </NavLink>

                        <NavLink to='/account' onClick={ handleLogOut } className="navbar-brand nav-link active" > Log Out </NavLink>
                    </div>
                </nav>
            ) : (
                <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>

                    <div className="container-fluid" >
                        <div className="collapse navbar-collapse" >
                            <NavLink to='/' className="navbar-brand nav-link active" > Home </NavLink> 
                            <NavLink to='/register' className="navbar-brand nav-link active" > Register </NavLink> 
                            <NavLink to='/login' className="navbar-brand nav-link active" > Login </NavLink> 
                        </div>
                    </div>
                </nav>
            )}


            {/* Route session */}
            <Route  path='/' component={Home} exact={true} />
            <Route  path='/register' component={Register} />
            <Route  path='/login' render={(props) =>{
                return <Login 
                    {...props}
                    handleAuth={handleAuth}
                    />
                }} 
            />

            {/* Need to add private route funcianality for account and other private comp */}
            <div >
                <PrivateRoute path='/account' component={Account} />
                <PrivateRoute path='/customers' component={CustomersContainer} />
                <PrivateRoute path='/products' component={ProductsContainer} />
                <PrivateRoute path='/bills' component={BillsContainer} />
                <PrivateRoute path='/dashboard' component={DashboardContainer} />
            </div>
        </div>
    )
}

export default withRouter(Navigate)