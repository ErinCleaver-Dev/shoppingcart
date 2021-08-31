import React, {useContext} from 'react';
import {CartContext} from './CartProvider';


const Order = () => {
    const [order, setOrder, getOrder] = useContext(CartContext);
    const totalPrice = order.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div className="cart">
        <div class="order_items">
            <h1>Products Ordered: </h1>
            {order.map(item => (<h6>{item.name} - {item.price} - <img src={item.img}/></h6>))}
        </div>
        <div className="order_product">
            <span>items ordered: {order.length}</span>
            <br />
            <span>total price: {totalPrice}</span>
        </div>
    </div>
    )
    
}

export default Order