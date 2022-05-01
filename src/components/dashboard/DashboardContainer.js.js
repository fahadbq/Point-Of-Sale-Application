import { useSelector } from 'react-redux'
import DashboardStats from './DashboardStats'
import DashboardChart from './DashboardChart'
import DashboardRecent from './DashboardRecent'


const DashboardContainer = (props) => {

    const { user } = useSelector(state => state)

    return (
        <div>
            <div style={{ position: "fixed", right: "90px", top: "80px", color: "#404040" }} >
                {user.loading ? (
                    <div className="spinner-border text-success" role="status" >
                    <h2 className="visually-hidden" > loading User </h2>
                    </div>
                    ) : (<h2 > Hi, {user.data.username} </h2>)} <br />
            </div>

            <DashboardChart />
            <DashboardRecent />
            <DashboardStats />
        </div>
    )
}

export default DashboardContainer