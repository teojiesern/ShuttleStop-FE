// for zheng yu to get product pass to checkout
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

export default function FakeCheckout() {
    const { buyNowProduct } = useContext(CartContext);

    if (!buyNowProduct) {
        return <div>Something went wrong, please select again</div>;
    }
    return (
        <div>
            <div key={buyNowProduct.id}>
                <p>{buyNowProduct.name}</p>
                <img
                    src={buyNowProduct.imgSrc}
                    alt={buyNowProduct.name}
                    width={100}
                />
                <p>Price: {buyNowProduct.price}</p>
                <p>Quantity: {buyNowProduct.quantity}</p>
                {buyNowProduct.options.color && <p> Color: {buyNowProduct.options.color}</p>}
                {buyNowProduct.options.size && <p>Size: {buyNowProduct.options.size}</p>}
                {buyNowProduct.options.grade && <p>Grade: {buyNowProduct.options.grade}</p>}
            </div>
        </div>
    );
}
