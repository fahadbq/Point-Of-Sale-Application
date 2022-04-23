
const Pagination = ({ dataPerPage, totalData, paginateFunc}) => {

    const pageNumbers = []

    for(let i=1; i <= Math.ceil(totalData / dataPerPage); i++){
        pageNumbers.push(i)
    }
    //

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((num, i) =>{
                    return <li key={i} className='page-item' >
                        <a onClick={( e ) => {
                            e.preventDefault()
                            paginateFunc(num)
                        }} href='!#' className='page-link' >
                        {num}    
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination