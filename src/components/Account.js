

import { useSelector } from 'react-redux'

const Account = (props) => {

    const { user } = useSelector((state) => state)

    return (
        <div className="border shadow-sm p-3 mb-5 bg-body rounded" style={{ position: "fixed", left: "100px", top: "100px", height: "250px", width: "400px" }} >
            
            { user.loading ? 
                (
                <div className="spinner-border text-secondary" role="status" >
                    <span className="visually-hidden" > Spinner </span>
                </div>
                ) : (
                <div>
                    <h2> User Info </h2> <hr />

                    <ul>
                        <li> Username: { user.data.username } </li>
                        <li> Email: { user.data.email} </li>
                        <li> Address: { user.data.address} </li>
                        <li> Business name: { user.data.businessName} </li>
                    </ul>
                </div>)
            }
        </div>
    )
}

export default Account