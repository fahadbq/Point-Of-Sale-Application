import { useState } from 'react'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const BillDetails = (props) => {
    const [ show, setShow ] = useState(false)

    const { billId } = props
    //make get request for that bill id and get the data to show in modal

    const toggle = () => {
        setShow(!show)
    }


    return (
        (
            <div>
                <Button
                    color="btn-link"
                    className='btn-link'
                    onClick={toggle}
                >
                    Details
                </Button>
                <Modal isOpen={show} centered={true} >
                    <ModalHeader toggle={toggle}>
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        
                    </ModalBody>
                    <ModalFooter>
                        {' '}
                        <Button onClick={toggle}>
                            Okay
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    )
}

export default BillDetails