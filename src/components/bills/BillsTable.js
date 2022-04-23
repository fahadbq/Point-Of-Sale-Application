
import BillItem from './BillItem'

const BillsTable = (props) => {
    
    const { cloneData } = props

    return (
        <div >
            <table className='table table-hover table-secondary' >
                <thead>
                    <tr>
                        <th> Customers </th>
                        <th> Products </th>
                        <th> Bill Details </th>
                        <th> Total </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    { cloneData.map((bill) => {
                        return (
                            <BillItem key={bill._id} bill= {bill} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BillsTable