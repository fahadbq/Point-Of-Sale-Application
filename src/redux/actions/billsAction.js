import axios from '../../config/axios'
import swal from 'sweetalert'

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
            .catch( err => swal({ title: err.message, }))
    }
}

export const asyncAddBills = (formData, resetField, resetForm) => {

    return (dispatch) => {
        axios.post(`/bills`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }) //Required token
            .then((res) =>{
                const billObj = res.data
                console.log('successfully created', billObj)
                dispatch(createBill(billObj))
                resetForm({ values: ''})
                resetField()
            })
            .catch( err => swal('Add error', err.message) )
    }
}

export const asyncRemoveBills = (id) => {

    return (dispatch) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Bill!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`/bills/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }) //Required token
                    .then( (res) => {
                        const billObj = res.data
                        console.log(billObj)
                        dispatch(removeBill(billObj))
                    } )
                    .catch( err => swal(err.message) )
            }
          });
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
