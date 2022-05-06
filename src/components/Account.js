
import { useSelector } from 'react-redux'

import { Card, CardTitle, CardText } from 'reactstrap'

const Account = (props) => {

    const { user } = useSelector((state) => state)

    return (
        <div style={{ position: "fixed", left: "100px", top: "120px", width: "370px" }} >

            {user.loading ?
                (
                    <div className="spinner-border text-secondary" role="status" >
                        <span className="visually-hidden" > Spinner </span>
                    </div>
                ) : (
                    <Card
                        inverse
                        color="secondary"
                    >
                        <CardTitle tag="h5">
                            User Info <hr />
                        </CardTitle>
                        <CardText>
                            Username: {user.data.username} <br />
                            Email: {user.data.email} <br />
                            Address: {user.data.address} <br />
                            Business name: {user.data.businessName} <br />
                        </CardText>
                    </Card>
                )
            }
        </div>
    )
}

export default Account