import ProductItem from './ProductItem'

const ProductsTable = (props) => {
    const { cloneData } = props

    return (
        <div>

            <table className='table table-hover table-secondary' > 
                <thead>
                    <tr>
                        <th> Name of product </th>
                        <th> Price of product </th>
                        <th> Date </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    { cloneData.map((prod) =>{
                        return <ProductItem key={prod._id} prod={prod} />
                    }) }
                </tbody>
            </table>

        </div>
    )
}

export default ProductsTable