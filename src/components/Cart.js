import React, {useContext} from 'react';
import {CartContext} from './CartProvider';
import {Link} from "react-router-dom"


export const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    console.log(cart);

    return (
        <div className="cart">
            <div class="order_items">
                 <h1>Products In Cart: </h1>
                {cart.map(item => (<h6>{item.name} - {item.price} - <img src={item.img}/></h6>))}
            </div>
            <div className="order_product">
                <span>items in cart : {cart.length}</span>
                <br />
                <span>total price: {totalPrice}</span>
                <Link to={"/Order"}>
                    <button type className="order">Order</button>
                </Link>
            </div>
        </div>
    )
}