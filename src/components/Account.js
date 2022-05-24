
import { useSelector } from 'react-redux'


const Account = (props) => {

    const { user } = useSelector((state) => state)

    return (
        <div style={{ position: "relative", left: "100px", top: "50px", width: "370px", height: "400px" }} >

            {user.loading ?
                (
                    <div className="spinner-border text-secondary" role="status" >
                        <span className="visually-hidden" > Spinner </span>
                    </div>
                ) : (
                    <div className="card border-dark mb-3" style={{maxWidth: "18rem"}}>
                    <h5 className="card-header"> User Info </h5>
                    <div className="card-body text-dark">
                        Username: {user.data.username} <br />
                        Email: {user.data.email} <br />
                        Address: {user.data.address} <br />
                        Business name: {user.data.businessName} <br />
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default Account