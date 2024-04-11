import { Route } from 'react-router-dom';
import CheckoutScreen from '../view/CheckoutScreen';
import ShoppingCartScreen from '../view/ShoppingCartScreen';

const CheckoutScreens = (
    <>
        <Route
            path=""
            element={<ShoppingCartScreen />}
        />
        <Route
            path="checkoutScreen"
            element={<CheckoutScreen />}
        />
    </>
);

export default CheckoutScreens;
