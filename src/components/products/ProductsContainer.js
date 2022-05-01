import AddProduct from '../products/AddProduct'
import ProductsList from '../../components/products/ProductsList'

const ProductsContainer = (props) =>{ 

    return (
        <div style={{ position: "fixed", left: "100px", top: "80px", width: "1000px" }} >
            
            <AddProduct /> <br />

            <ProductsList />
        </div>
    )
}

export default ProductsContainer