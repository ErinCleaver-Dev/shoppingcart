import {Link} from "react-router-dom"

const ProductLink = ({productLink}) => {
    const link = `${productLink.id}/${productLink.name}`
    return (

        <Link className="product-link" to={link}>
            <h1>{productLink.name}</h1>
            <img src={productLink.img}/>
        </Link>


    )

}

export default ProductLink