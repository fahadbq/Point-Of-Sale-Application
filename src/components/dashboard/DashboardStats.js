import { useSelector } from "react-redux"
import StatsItem from './StatsItem'
import totalIncome from '../../redux/selectors/totalIncome'

const DashboardStats = (props) => {

    const { customers, products, bills } = useSelector((state) => state)

    return (
        <div className=" container row" style={{ position: "fixed", bottom: "80px", left: "120px" }} >

            <div className="col-3">
                <StatsItem title="Total Bills" totalData={bills.data.length} />
            </div>

            <div className="col-3">
                <StatsItem title="Total Customers" totalData={customers.data.length} />
            </div>

            <div className="col-3">
                <StatsItem title="Total Products" totalData={products.data.length} />
            </div>

            <div className="col-3">
                <StatsItem title="Total Income" totalData={`$ ${totalIncome(bills)}`} />
            </div>
        </div>
    )
}

export default DashboardStats