import { format } from "date-fns"


const totalIncome = (bills, dateArr) => {

    const newDate = new Date()

    const dateFormatted = format(newDate, "yyyy-MM-dd")
        
    const checkParams = dateArr === undefined ? dateFormatted : dateArr.split('-').reverse().join('-') // reversing the string to dd-mm-yyyy

    //Filtering by date and returns bill array
    const data = bills.data.filter((ele) => {
        return ele.date.slice(0, 10) === checkParams 
    } )

    //Get total amount
    const total = data.reduce((prev, curr) => {
        return prev + curr.total
    }, 0)


    return total
}

export default totalIncome