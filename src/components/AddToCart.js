import React, {useContext} from 'react';
import {CartContext} from './CartProvider';

export const AddToCart = (props) => {
    const [cart, setCart] = useContext(CartContext)

    const addToCart = () => {
        const tshirt = {name: props.name, price: props.price, img: props.img};
        setCart(currentState => [...currentState, tshirt]);
    }
    
    return (
        <div>
            <button onClick={addToCart}>Add to Cart</button>
            <hr />
        </div>
    )
}

export default AddToCart