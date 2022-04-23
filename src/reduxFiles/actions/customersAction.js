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
            .catch( err => alert('geting all customers',err.message))
    }
}

export const asyncAddCustomer = (formData, resetForm) =>{

    return (dispatch) =>{
        axios.post(`/customers`, formData) //Required token 
            .then((res) =>{
                const custObj = res.data
                dispatch(addCustomer(custObj))
                resetForm({ values: ''})
            })
            .catch( err => alert('add customer err', err.message) )
    }
}

export const asyncEditCustomer = ( id, formData, handleToggle ) =>{

    return (dispatch) =>{
        axios.put(`/customers/${id}`, formData) //Required token 
            .then((res) => {
                const editedObj = res.data
                console.log('edited succesfully',editedObj)
                handleToggle()
                dispatch(editCustomer(editedObj))
            })
            .catch( err => alert ('edited succesfully', err.message) )
    }
}

export const asyncRemoveCustomer = (id) =>{

    return (dispatch) =>{
        const confirm = window.confirm('Are you sure ?')
        if(confirm){
            axios.delete(`/customers/${id}`) //Required token 
                .then((res) =>{
                    const customerObj = res.data
                    console.log('removed succuesfully', customerObj)
                    dispatch(removeCustomer(customerObj))
                })
                .catch( err => alert(err.message))
        }   
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