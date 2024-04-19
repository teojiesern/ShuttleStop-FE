import { useState } from 'react';

function PassData() {
    const [cart, setCart] = useState([]);
    const [buyNowProduct, setBuyNowProduct] = useState(null);

    // Add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Find the index of the product in the cart to check whether exist or not with same options
            const index = prevCart.findIndex((item) => item.id === product.id);

            // If the product is not in the cart, add it
            if (index === -1) {
                return [...prevCart, { ...product }];
            }

            // If the product is already in the cart, increase its quantity
            const newCart = [...prevCart];
            newCart[index].quantity += product.quantity;
            return newCart;
        });
    };

    // For buy now which only pass info of one product
    const buyNow = (product) => {
        setBuyNowProduct(product);
    };

    // Additional for delete product in cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    // The value that will be provided to the context
    const CartArrayValue = {
        cart,
        addToCart,
        buyNowProduct,
        buyNow,
        removeFromCart,
    };

    return CartArrayValue;
}

export default PassData;
