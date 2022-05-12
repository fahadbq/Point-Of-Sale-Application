import React from 'react'
import AddCustomers from './AddCustomer'
import CustomersList from './CustomersList'

const CustomersContainer = (props) =>{

    return (
        <div style={{ position: "relative", left: "100px", top: "50px", width: "1300px" }} > {/* will make changes to the positioning */}
            
            <AddCustomers />
            
            <CustomersList />
            
        </div>
    )
}

export default CustomersContainer