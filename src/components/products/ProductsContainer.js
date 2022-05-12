import AddProduct from '../products/AddProduct'
import ProductsList from '../../components/products/ProductsList'

const ProductsContainer = (props) =>{ 

    return (
        <div style={{ position: "relative", left: "100px", top: "50px", width: "1300px" }} >
            
            <AddProduct />

            <ProductsList />
        </div>
    )
}

export default ProductsContainer