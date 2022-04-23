import BillForm from './BillForm'
import BillsList from './BillsList'

const BillsContainer = ( props ) => {

    
    return (
        <div style={{ position: "fixed", left: "60px", top: "105px", width: "900px" }}>

            <BillForm />
            
            <BillsList />
        </div>
    )
}

export default BillsContainer