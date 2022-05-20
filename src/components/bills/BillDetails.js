import { useState, useRef  } from 'react'
import { useSelector } from 'react-redux'
import findName from '../../redux/selectors/findName'
import {Table} from 'reactstrap'

import { useReactToPrint } from "react-to-print";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'


const BillDetails = (props) => {
    const [ modal, setModal ] = useState(false)

    const { bill } = props
    //make get request for that bill id and get the data to show in modal

    const { customers, products } = useSelector((state) => state )

    const toggle = () => {
        setModal(!modal)
    }

    const invoiceRef = useRef();

    const handlePrint = useReactToPrint({
       
        content: () => invoiceRef.current,
    });


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

                <Modal isOpen={modal} centered={true} ref={invoiceRef}>
                    <ModalHeader toggle={toggle} style={{backgroundColor: "#F5F5F5"}}>
                        <div>
                            { `Customer: ${findName(customers, bill.customer)}` }
                        </div>
                    </ModalHeader>
                    <ModalBody style={{backgroundColor: "#F5F5F5"}} >
                        <Table hover> 
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
                        <div> 
                            Date: {bill.date.slice(0, 10).split('-').reverse().join('-')}

                            <h5 style={{border:'none',background:'none', display:'inline-block', float: 'right' }}> Total: ${bill.total} </h5> 
                        </div>
                    </ModalBody>
                    <ModalFooter style={{backgroundColor: "#F5F5F5"}} >
                        <Button onClick={handlePrint} className="btn btn-info btn-sm" style={{ marginRight: "20px" }} > Download Invoice </Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    )
}

export default BillDetails