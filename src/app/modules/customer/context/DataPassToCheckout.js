import { useCallback, useState } from 'react';

function PassData() {
    const [cart, setCart] = useState([]);
    const [buyNowProduct, setBuyNowProduct] = useState(null);

    // Add a product to the cart
    const addToCart = (product, selectedVariant, quantity) => {
        setCart((prevCart) => {
            // Find the index of the product in the cart to check whether exist or not with same options
            const index = prevCart.findIndex(
                (item) => item.product.productId === product.productId && item.selectedVariant === selectedVariant,
            );

            // If the product is not in the cart, add it
            if (index === -1) {
                return [...prevCart, { product, selectedVariant, quantity }];
            }

            // If the product is already in the cart, increase its quantity
            const newCart = [...prevCart];
            newCart[index] = {
                ...newCart[index],
                quantity: newCart[index].quantity + quantity,
            };
            return newCart;
        });
    };

    // For buy now which only pass info of one product
    const buyNow = (product) => {
        setBuyNowProduct(product);
    };

    // Additional for delete product in cart
    const removeFromCart = (item) => {
        setCart((prevCart) => prevCart.filter((element) => element !== item));
    };

    // Additional for edit product quantity in cart
    const increaseQty = useCallback((item) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex((element) => element === item);
            const newCart = [...prevCart];
            newCart[index].quantity += 1;
            return newCart;
        });
    }, []);
    const decreaseQty = useCallback((item) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex((element) => element === item);
            const newCart = [...prevCart];
            newCart[index].quantity -= 1;
            return newCart;
        });
    }, []);

    // The value that will be provided to the context
    const CartArrayValue = {
        cart,
        addToCart,
        buyNowProduct,
        buyNow,
        removeFromCart,
        increaseQty,
        decreaseQty,
    };

    return CartArrayValue;
}

export default PassData;
