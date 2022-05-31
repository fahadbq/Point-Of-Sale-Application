import swal from 'sweetalert'
import axios from '../../config/axios'

//case Object 
export const p = {
    _ADD: 'ADD_PRODUCT',
    _GET: "GET_PRODUCTS",
    _EDIT: "EDIT_PRODUCT",
    _REMOVE: 'REMOVE_PRODUCT',
}   

export const asynGetProducts = () =>{

    return (dispatch) =>{
        axios.get(`/products`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) =>{
                const prodArr = res.data
                dispatch(getProducts(prodArr))
            })
            .catch(err => swal({ title: err.message }))
    }
}

//action creator return function
export const asyncAddProduct = (formData, resetForm) =>{

    return (dispatch) => {
        axios.post(`/products`, formData, { 
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }) //Required token 
            .then((res) => {
                const prodObj = res.data
                dispatch(addProduct(prodObj))
                resetForm({ values: ''})
            })
            .catch( err => swal({title: err}) )
    }
}

export const asyncEditProduct = (id, formData, handleToggle ) =>{

    return (dispatch) =>{
        axios.put(`/products/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }) //Required token
            .then((res) =>{
                const prodObj = res.data
                swal({title: 'Successfully edited', icon: "success"})
                handleToggle()
                dispatch(editProduct(prodObj))
            })
            .catch( err => swal({ title: err.message }))
    }
}

export const asyncDeleteProduct = (id) =>{

    return (dispatch) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`/products/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }) //Required token
                    .then((res) =>{
                        const prodObj = res.data
                        swal({title: 'Successfully removed', icon: "success"})
                        dispatch(removeProduct(prodObj))
                    })
                    .catch( err => swal({ title: err.message }) )
            }
          });
    }
}

// action creator return object 
const getProducts = (prodArr) =>{
    
    return {
        type: p._GET, payload: prodArr
    }
}

const addProduct = (prodObj) =>{

    return {
        type: p._ADD, payload: prodObj
    }
}

const editProduct = (prodObj) => {

    return {
        type: p._EDIT, payload: prodObj
    }
}

const removeProduct = (prodObj) =>{

    return { 
        type: p._REMOVE, payload: prodObj
    }

}