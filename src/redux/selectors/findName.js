const findName = (reduxData, id) => {

    const data = [ ...reduxData.data]

    const result = data.find((ele) => {
        return ele._id === id
    })
    
    return result ? result.name : "loading"
}

export default findName

//Careful not to delete the product or customer