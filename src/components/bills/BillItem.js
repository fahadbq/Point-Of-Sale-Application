import { useSelector, useDispatch } from 'react-redux'
import { asyncRemoveBills } from '../../redux/actions/billsAction'
import findName from '../../redux/selectors/findName'
import BillDetails from './BillDetails'

import { FaTrashAlt } from "react-icons/fa";

const BillItem = (props) => {

    const { bill } = props

    const dispatch = useDispatch()

    const { customers } = useSelector((state) => state )

    const handleRemove = (id) => {
        dispatch(asyncRemoveBills(id))
    }

    return (
            <tr key={bill._id} >

                <td> {findName(customers, bill.customer)} </td>

                <td> { bill.date.slice(0, 10).split('-').reverse().join('-') } </td>

                <td> ${bill.total} </td>

                <td> <BillDetails bill={bill} /> {/* Item details Component */} </td>

                <td>
                    <button onClick={() => {
                        handleRemove(bill._id)
                    }} className="btn btn-outline-danger btn-sm" > <FaTrashAlt /> </button>
                </td>
            </tr>
    )
}

export default BillItem