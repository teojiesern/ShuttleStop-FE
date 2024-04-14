// for zheng yu to get product pass to cart
// just to provide the format to get product details

// product pass with format:
// id: product.id + JSON.stringify(selectedOptions),
// name: product.name,
// price: product.price,
// imgSrc: product.imgSrc,
// quantity,
// options: selectedOptions,

import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function FakeCart() {
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return <div>No product in cart</div>;
    }
    return (
        <div>
            {cart.map((product) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <img
                        src={product.imgSrc}
                        alt={product.name}
                        width={100}
                    />
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    {product.options.color && <p>Color: {product.options.color}</p>}
                    {product.options.size && <p>Size: {product.options.size}</p>}
                    {product.options.grade && <p>Grade: {product.options.grade}</p>}
                </div>
            ))}
        </div>
    );
}
