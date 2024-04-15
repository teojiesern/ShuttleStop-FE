import CartContext from './CartContext';
import PassData from './DataPassToCheckout';

function CartProvider({ children }) {
    const cartContextValue = PassData();

    return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;
