import AddToCart from './AddToCart'
import database from '../database/database.json' 

const Product = (props) => {
    
    const product = database.database.filter((item) => {
        console.log(item.id == props.match.params.id)
        return item.id == props.match.params.id})

    console.log(product)
    return (
        <div>
            <div className="product_information">
                <h2>{product[0].name}</h2>
                <p>{product[0].price}</p>
                <img src={product[0].img}/>
            </div>
            <AddToCart name={product[0].name} price={product[0].price} img={product[0].img}/>
        </div>
    )
}

export default Product