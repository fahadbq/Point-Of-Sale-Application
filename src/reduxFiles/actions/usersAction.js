import axios from '../../config/axios'

import { asyncGetBills } from './billsAction'
import { asyncGetCustomers } from './customersAction'
import { asynGetProducts } from './productsAction'

// Case type values in an Object
export const u = {
    _GET: 'GET_USER',
    _LOADING: 'LOADING_USER'
}

// async action func
export const asyncRegisterUser = (formData, pushRegisterPath, resetForm) =>{

    return (dispatch) => {
        axios.post(`/users/register`, formData)
            .then((res) =>{
                const result = res.data
                if( !result.hasOwnProperty('errors') ){ // Error not found
                    resetForm({ values: ''})
                    alert('successfully Registered', result)
                    pushRegisterPath()
                } else {
                    alert(result.message)
                }
            })
            .catch( err => alert(err.message) )
    }
}

// async action func
export const asyncLoginUser = (formData, pushAccPath, handleAuth, resetForm) =>{

    return (dispatch) =>{
        axios.post(`/users/login`, formData)
            .then((res) =>{
                const result = res.data
                if( !result.hasOwnProperty('errors')){ // Error not found
                    localStorage.setItem('token', result.token)
                    pushAccPath()
                    dispatch(asyncGetUser()) // Need data after logging in
                    dispatch(asyncGetBills())
                    dispatch(asyncGetCustomers())
                    dispatch(asynGetProducts())
                    resetForm({ values: ''})
                    handleAuth()
                } else {
                    console.log(result)
                    alert('login error', result)
                }
            })
            .catch( err => alert(err.message) )
    }
}

export const asyncGetUser = ( ) =>{

    return (dispatch) =>{
        axios.get(`/users/account`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        } ) //Required token 
            .then((res) =>{
                const userObj = res.data
                dispatch(getUser(userObj))
                dispatch(toggleLoading())
            })
            .catch( err => alert('unable to read data', err.message) )
    }
}

// async action creators
const getUser = (userObj) =>{

    return {
        type: u._GET, payload: userObj
    }
}

const toggleLoading = () =>{

    return {
        type: u._LOADING
    }
}