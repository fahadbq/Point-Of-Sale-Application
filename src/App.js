import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navigate from './userAuthComponents/Navigate'
import 'bootstrap/dist/css/bootstrap.min.css'

import { asyncGetUser } from './reduxFiles/actions/usersAction'
import { asyncGetBills } from './reduxFiles/actions/billsAction'
import { asyncGetCustomers } from './reduxFiles/actions/customersAction'
import { asynGetProducts } from './reduxFiles/actions/productsAction'

const App = (props) =>{
    const [ userLoggedIn, setUserLoggedIn ] = useState(false) // Created state for handling page reloads

    const dispatch = useDispatch()

    //Function for toggling page reload 
    const handleAuth = () =>{
        setUserLoggedIn(!userLoggedIn)
    }

    useEffect(() =>{
        if(localStorage.getItem('token')){
            setUserLoggedIn(true)
            dispatch(asyncGetUser())
            dispatch(asyncGetBills())
            dispatch(asyncGetCustomers())
            dispatch(asynGetProducts())
        }
    }, [dispatch])

    return (
        <div>
            <Navigate userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
        </div>
    )
}

export default App
