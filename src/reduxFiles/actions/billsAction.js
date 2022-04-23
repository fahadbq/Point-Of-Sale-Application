import axios from '../../config/axios'

//Object for case 
export const b = {
    _GET: 'GET_BILLS',
    _ADD: 'ADD_BILL',
    _REMOVE: 'REMOVEBILL'
}

//action creator function
export const asyncGetBills = () =>{

    return (dispatch) =>{
        axios.get(`/bills`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) =>{
                const billArr = res.data
                dispatch(getBills(billArr))
            })
            .catch( err => alert('Bills Error', err.message ) )
    }
}

export const asyncAddBills = (formData, resetField) => {

    return (dispatch) => {
        axios.post(`/bills`, formData) //Required token
            .then((res) =>{
                const billObj = res.data
                console.log('successfully created', billObj)
                dispatch(createBill(billObj))
                resetField()
            })
            .catch( err => alert('Add error', err.message) )
    }
}

export const asyncRemoveBills = (id) => {

    return (dispatch) => {
        axios.delete(`/bills/${id}`) //Required token
            .then( (res) => {
                const billObj = res.data
                console.log(billObj)
                dispatch(removeBill(billObj))
            } )
            .catch( err => alert(err.message) )
    }
}


//action creator object
const getBills = (billArr) => {

    return {
        type: b._GET, payload: billArr
    }
}

const createBill = (billObj) => {

    return {
        type: b._ADD, payload: billObj
    }
}

const removeBill = (billObj) => { 
    
    return {
        type: b._REMOVE, payload: billObj
    }
}
