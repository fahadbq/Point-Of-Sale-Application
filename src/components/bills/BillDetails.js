import { useRef } from 'react'
import { useSelector } from 'react-redux'
import findName from '../../redux/selectors/findName'
import {Table} from 'reactstrap'

import { useReactToPrint } from "react-to-print";
import {Button } from 'reactstrap'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const BillDetails = (props) => {

    const { id } = useParams()

    const navigate = useNavigate()

    const { bills, customers, products } = useSelector((state) => state )

    const bill = (bills.data.length > 0 && bills.data.find(ele => ele._id === id))
    console.log(bill)

    const invoiceRef = useRef();

    const handlePrint = useReactToPrint({
       
        content: () => invoiceRef.current,
    });

    return (
        (
            <div className='container' style={{marginTop: "30px"}} ref={invoiceRef}>
                <div>
                    <span style={{fontWeight: "bold" , fontSize: "25px"}}>{ `Customer: ${findName(customers, bill.customer)}` } </span>
                    <span style={{float: "right"}}> Date: {Object.keys(bill).length > 0 && bill.date.slice(0, 10).split('-').reverse().join('-')} </span>
                </div>
                <Table hover > 
                    <thead>
                        <tr>
                            <th> Products </th>
                            <th> Quantity </th>
                            <th> Price </th>
                            <th> Sub total </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(bill).length > 0 && bill.lineItems.map(ele => {
                            return <tr key={ele._id} >
                                <td> {findName(products, ele.product)} </td>
                                <td> {ele.quantity} </td>
                                <td> ${ele.price} </td>
                                <td> ${ele.subTotal} </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
                <div> 
                    <h4 style={{border:'none', marginRight: "255px", background:'none', display:'inline-block', float: 'right' }}> Total: ${Object.keys(bill).length > 0 && bill.total} </h4> 
                </div>
                <Button onClick={() => navigate('/bills')} className="btn btn-secondary btn-sm" > Back </Button>
                <Button onClick={handlePrint} className="btn btn-info btn-sm" style={{ marginLeft: "20px" }} > Download Invoice </Button>

            </div>
        )
    )
}

export default BillDetails