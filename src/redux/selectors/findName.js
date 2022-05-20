const findName = (reduxData, id) => {

    const data = [ ...reduxData.data]

    const result = data.find((ele) => {
        return ele._id === id
    })

    if(result){
        return result.name
    }
}

export default findName

//Careful not to delete the product or customer