import swal from 'sweetalert'
import axios from '../../config/axios'

//case object 
export const c = {
    _ADD: "ADD_CUSTOMER",
    _GET: "GET_CUSTOMERS",
    _REMOVE: 'REMOVE_CUSTOMER',
    _EDIT: 'EDIT_CUSTOMER',
}

//Action creator function
export const asyncGetCustomers = () =>{
    
    return (dispatch) =>{
        axios.get(`/customers`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) =>{
                const getArr = res.data
                dispatch(getCustomers(getArr))

            })
            .catch( err => swal('getting all customers',err.message))
    }
}

export const asyncAddCustomer = (formData, resetForm) =>{

    return (dispatch) =>{
        axios.post(`/customers`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }) //Required token 
            .then((res) =>{
                const custObj = res.data
                    
                dispatch(addCustomer(custObj))
                resetForm({ values: ''})
            })
            .catch( err => swal('add customer err', err.message) )
    }
}

export const asyncEditCustomer = ( id, formData, handleToggle ) =>{

    return (dispatch) =>{
        axios.put(`/customers/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }) //Required token 
            .then((res) => {
                const editedObj = res.data
                swal({title: 'Edited successfully', icon: "success"})
                handleToggle()
                dispatch(editCustomer(editedObj))
            })
            .catch( err => swal ('edited succesfully', err.message) )
    }
}

export const asyncRemoveCustomer = (id) =>{

    return (dispatch) =>{
        // const confirm = window.confirm('Are you sure ?')

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Customer!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`/customers/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }) //Required token 
                .then((res) =>{
                    const customerObj = res.data
                    swal({title: 'Removed successfully', icon: "success"})
                    dispatch(removeCustomer(customerObj))
                })
                .catch( err => swal(err.message))
            }
          });
    }
}


//action creator
const getCustomers = (getArr) =>{

    return {
        type: c._GET, payload: getArr
    }
}

const addCustomer = (custObj) =>{

    return {
        type: c._ADD, payload: custObj
    }
}

const removeCustomer = (customerObj) =>{
    return {
        type: c._REMOVE, payload: customerObj._id // sending only _id instead of the an Object 
    }
}

const editCustomer = (editedObj) => {

    return {
        type: c._EDIT, payload: editedObj
    }
}