import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'

import { asyncAddBills } from '../../reduxFiles/actions/billsAction'

const BillForm = (props) => {
    const [ date, setDate ] = useState('')
    const [ customer, setCustomer ] = useState('')
    
    //form Errors
    const [ formErrors, setFormErrors ] = useState({})

    const errors={}
    
    //Adding lineItems to input fields 
    const [ inputFields, setInputFields ] = useState([{ product: '', quantity: 1 }])
    
    const dispatch = useDispatch()

    const { customers, products } = useSelector( state => state)

    const handleChange = (e) =>{

        const readInput = e.target.name
        if(readInput === 'date'){
            setDate(e.target.value)
        } else if (readInput === 'customer'){
            setCustomer(e.target.value)
        }
    }   

    //Reading input values
    const handleDynamicChange = (index, e) => {
        const values = [ ...inputFields]
        values[index][e.target.name] = e.target.value
        setInputFields(values)
    }

    const handleAddField = () => {
        setInputFields([ ...inputFields, { product: '', quantity: 1 }])
    }

    const handleRemoveField = (index) => { 
        const values = [ ...inputFields]
        values.splice(index, 1)
        setInputFields(values)
    }

    const resetField = () => {

        setDate('')
        setCustomer('')
        setInputFields([ { product: '', quantity: 0 } ])
    }
    
    const runValidations = () => {
        if( date.trim().length === 0 ){
            errors.date = 'Date is required!'
        }
        if( customer.trim().length === 0 ){
            errors.customer = 'Select a customer!'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Errors Validations
        runValidations()

        if(Object.keys(errors).length === 0){
            const formData = {
                date,
                customer,
                lineItems: [ ...inputFields]
            }
            dispatch(asyncAddBills(formData, resetField))
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div className='border border-3 shadow-sm p-3 mb-5 bg-body rounded' style={{ position: "fixed", top: '105px', right: "80px", width: "450px", height: "500px" }} >
            
            <h4> Create a Bill </h4> <hr />

            <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate >

                <label> Enter Bill Date </label>
                <div className="col-md-6">
                    <input 
                        type='date'
                        name='date'
                        value={date}
                        onChange={handleChange}
                        className="form-control"

                    />
                    { formErrors.date && <div> <span className="form-text" > {formErrors.date} </span> </div> }
                </div> 

                {/* customer */}
                <div className="col-md-6" >
                    <select value={customer} name='customer' onChange={handleChange} className="form-select" > 
                        <option value=''> Select Customer </option>

                        { customers.data.map((cust) =>{
                            return <option key={ cust._id } value={cust._id} > {cust.name} </option>
                        })}
                    </select> 
                { formErrors.customer && <div className="form-text" > {formErrors.customer} </div> }
                </div>


                { inputFields.map(( field, index) =>{
                    return <div key={index} >

                        <select value={field.product} name='product' onChange={(e) => handleDynamicChange(index, e) } className="form-select" > 
                            <option value=''> Select Product </option>

                            { products.data.map((prod) =>{
                                return <option key={ prod._id } value={prod._id} > {prod.name} </option>
                            })}
                        </select>

                            <input type='number' 
                                value={field.quantity} 
                                name='quantity' 
                                onChange={(e) => handleDynamicChange(index, e)} 
                                min='1' 
                                max='99' 
                                style={{width: "50px"}} 
                                
                            />

                        <input type='button' value='Add' onClick={() => {
                            handleAddField()
                        }} className="btn btn-success btn-sm" />
                        

                        { index ? <input type='button' value='Delete' onClick={() => handleRemoveField(index) } className="btn btn-danger btn-sm" /> : null }

                    </div>
                }) }
                    
                <input type='submit' className="btn btn-primary btn-sm" />
            </form>
        </div>
    )
}

export default BillForm