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
        axios.post(`/products`, formData) //Required token 
            .then((res) => {
                const prodObj = res.data
                dispatch(addProduct(prodObj))
                resetForm({ values: ''})
            })
            .catch( err => swal(err) )
    }
}

export const asyncEditProduct = (id, formData, handleToggle ) =>{

    return (dispatch) =>{
        axios.put(`/products/${id}`, formData) //Required token
            .then((res) =>{
                const prodObj = res.data
                console.log('succuesfull edited', prodObj)
                handleToggle()
                dispatch(editProduct(prodObj))
            })
            .catch( err => swal( err.message ))
    }
}

export const asyncDeleteProduct = (id) =>{

    return (dispatch) => {
        axios.delete(`/products/${id}`) //Required token
            .then((res) =>{
                const prodObj = res.data
                console.log('successfully removed', prodObj)
                dispatch(removeProduct(prodObj))
            })
            .catch( err => swal(err.message) )
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