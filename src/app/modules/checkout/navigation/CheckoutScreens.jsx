import { Route } from 'react-router-dom';
import AuthenticatedRoute from '../../../platform/components/navigation/AuthenticatedRoute';
import CheckoutScreen from '../view/CheckoutScreen';
import ShoppingCartScreen from '../view/ShoppingCartScreen';

const CheckoutScreens = (
    <Route element={<AuthenticatedRoute />}>
        <Route
            path=""
            element={<ShoppingCartScreen />}
        />
        <Route
            path="checkoutScreen"
            element={<CheckoutScreen />}
        />
    </Route>
);

export default CheckoutScreens;
