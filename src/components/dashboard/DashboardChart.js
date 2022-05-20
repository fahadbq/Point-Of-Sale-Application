import { Chart } from 'react-google-charts'
import { useSelector } from 'react-redux'
import totalIncome from '../../redux/selectors/totalIncome'
import { format, addDays } from 'date-fns'

const DashboardChart = (props) => {
 
    const { bills } = useSelector((state) => state)


    const getlastWeekDays = () => {

        let daysSorted = [];
        let today = addDays(new Date(), 1); // Tomorrow's

        for(let i = 0; i < 7; i++) {
            let newDate = new Date(today.setDate(today.getDate() - 1));
            daysSorted.push(format(newDate, "dd-MM-yyyy"));
        }

        return daysSorted.reverse()
    }

    //Creating week's data
    const chartData = getlastWeekDays().map((ele) => {
        return [ ele, totalIncome(bills, ele), "#2E8B57"]
    })

    //Chart data
    const data = [
        ["Element", "Sales $", { role: "style" }]
    ]

    chartData.forEach((ele) => {
        return data.push(ele)
    })

    return (
        <div style={{position: "absolute", bottom: "300px", width: "830px", left: "0px" }} >
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
    )
}

export default DashboardChart