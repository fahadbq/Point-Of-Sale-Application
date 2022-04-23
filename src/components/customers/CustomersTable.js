import CustomerItem from './CustomerItem'

const CustomersTable = (props) => {

    const { cloneData } = props

    return (   
        <div>
            
            <table className="table table-striped table-hover table-secondary" >
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Mobile </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {cloneData.map((cust) => {
                        return <CustomerItem key={cust._id} cust={cust} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CustomersTable