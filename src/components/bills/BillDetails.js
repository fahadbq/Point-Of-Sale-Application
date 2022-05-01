import { useState } from 'react'
import { useSelector } from 'react-redux'
import findName from '../../reduxFiles/selectors/findName'
import {Table} from 'reactstrap'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const BillDetails = (props) => {
    const [ show, setShow ] = useState(false)

    const { bill } = props
    //make get request for that bill id and get the data to show in modal

    const { bills, customers, products } = useSelector((state) => state )

    const findBillId = bills.data.find(ele => ele._id === bill._id)

    const toggle = () => {
        setShow(!show)
    }

    const generatePDF= () => {
        window.print()
    }


    return (
        (
            <div >
                <Button
                    color="btn-link"
                    className='btn-link'
                    size='sm'
                    onClick={toggle}
                >
                    Details
                </Button>
                <Modal isOpen={show} centered={true} >
                    <ModalHeader toggle={toggle} style={{backgroundColor: "#F5F5F5"}}>
                        { `Customer: ${findName(customers, bill.customer)}` }
                    </ModalHeader>
                    <ModalBody style={{backgroundColor: "#F5F5F5"}} >
                        <Table> 
                            <thead>
                                <tr>
                                    <th> Products </th>
                                    <th> Quantity </th>
                                    <th> Price </th>
                                    <th> Sub total </th>
                                </tr>
                            </thead>
                            <tbody>
                                {bill.lineItems.map(ele => {
                                    return <tr key={ele._id} >
                                        <td> {findName(products, ele.product)} </td>
                                        <td> {ele.quantity} </td>
                                        <td> ${ele.price} </td>
                                        <td> ${ele.subTotal} </td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                        <h5 style={{border:'none',background:'none', display:'inline-block', float: 'right' }}> Total: ${bill.total} </h5>
                    </ModalBody>
                    <ModalFooter style={{backgroundColor: "#F5F5F5"}} >
                        {' '}
                        <Button onClick={generatePDF} className="btn btn-info btn-sm" style={{ marginRight: "20px" }} > Download Invoice </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    )
}

export default BillDetails