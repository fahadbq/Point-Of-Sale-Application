import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncRemoveBills } from '../../reduxFiles/actions/billsAction'
import findName from '../../reduxFiles/selectors/findName'
import BillDetails from './BillDetails'

const BillItem = (props) => {

    const { bill } = props

    const dispatch = useDispatch()

    const { customers, products } = useSelector((state) => state )

    const generatePDF= () => {
        window.print()
    }

    const handleRemove = (id) => {
        dispatch(asyncRemoveBills(id))
    }

    return (
            <tr key={bill._id} >

                <td> {findName(customers, bill.customer)} </td>

                <td> {bill.lineItems.map(ele => (`${findName(products, ele.product)} (${ele.quantity})`)).join(', ')} </td>
                
                {/* Item details Component */}
                <td> <BillDetails billId={bill._id} />  </td>

                <td> ${bill.total} </td>

                <td> <button onClick={generatePDF} className="btn btn-info btn-sm " style={{ marginRight: "20px" }} > Invoice </button>

                    <button onClick={() => {
                        handleRemove(bill._id)
                    }} className="btn btn-outline-danger btn-sm" > Remove </button>
                </td>
            </tr>
    )
}

export default BillItem