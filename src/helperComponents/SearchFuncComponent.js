import React, { useState } from 'react'

const SearchFuncComponent = (props) => {
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('')

    const { setCloneData, originalData } = props

    //Event Handler search field
    const handleChange = (e) => {
        const readName = e.target.name
        const readValue = e.target.value

        if (readName === "search") { // Filtering
            setSearch(readValue)

            const valueLowerCase = readValue.toLowerCase()
            // useEffect asking for other vallue to put in dependency array ?
            const filteredData = originalData.data.filter((ele) => {
                return ele.name.toLowerCase().includes(valueLowerCase) || (ele.mobile && ele.mobile.toString().includes(valueLowerCase)) || (ele.price && ele.price.toString().includes(valueLowerCase))
            })
            setCloneData(filteredData)

        } else if (readName === "sortBy") { // Sorting 
            setSortBy(readValue)

            switch (readValue) {
                case 'A - Z': return setCloneData([...originalData.data.sort((a, b) => {
                    if (b.name.toLowerCase() > a.name.toLowerCase()) { return -1 }
                    if (b.name.toLowerCase() < a.name.toLowerCase()) { return 1 }
                    return 0
                })])
                case 'Z - A': return setCloneData([...originalData.data.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1 }
                    if (a.name.toLowerCase() < b.name.toLowerCase()) { return 1 }
                    return 0
                })])
                case '1 - 100': return setCloneData([...originalData.data.sort((a, b) => {
                    return a.mobile - b.mobile || a.price - b.price
                })])
                case '100 - 1': return setCloneData([...originalData.data.sort((a, b) => {
                    return b.mobile - a.mobile || b.price - a.price
                })])

                default: return [...originalData.data]
            }
        }
        
    }

    return (
        <div className="row col-12" style={{width: '800px'}}>
            <form className="input-group input-group-sm mb-3" aria-label="Text input with dropdown button">
                <input
                    type='text'
                    placeholder="Search..."
                    value={search}
                    name="search"
                    onChange={handleChange}
                    className="form-control"
                />
                
                <div className="row col-2">
                <select value={sortBy} 
                    name="sortBy" 
                    onChange={handleChange} 
                    className="btn btn-secondary dropdown-toggle form-select" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                >
                    
                    <option value=''> Sort By </option>

                    <option value='A - Z' className="dropdown-item text-light" > A - Z </option>
                    <option value='Z - A' className="dropdown-item text-light" > Z - A </option>
                    <option value='1 - 100' className="dropdown-item text-light" > 1 - 100 </option>
                    <option value='100 - 1' className="dropdown-item text-light" > 100 - 1 </option>

                </select>
                </div>
            </form>
        </div>
    )
}

export default SearchFuncComponent