import { useSelector } from "react-redux"
import RecentList from './RecentList'

const DashboardRecent = (props) => {

    const { customers, products } = useSelector(state => state)

    return (
        <div className="container row" style={{ position: "absolute", left: "790px", top: "160px"}} >

            <div className="col-3">
                <RecentList title="Recent Customers" storeData ={customers} />
            </div>

            <div className="col-3">
                <RecentList title="Recent Products" storeData={products} />
            </div>
            
        </div>
    )
}

export default DashboardRecent