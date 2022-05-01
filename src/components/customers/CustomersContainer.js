import React from 'react'
import AddCustomers from './AddCustomer'
import CustomersList from './CustomersList'

const CustomersContainer = (props) =>{

    return (
        <div style={{ position: "fixed", left: "100px", top: "80px", width: "1300px" }} > {/* will make changes to the positioning */}
                
            <AddCustomers /> <br />
                
            <CustomersList />
            
        </div>
    )
}

export default CustomersContainer