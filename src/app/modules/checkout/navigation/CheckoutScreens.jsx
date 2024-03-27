import { Route } from 'react-router-dom';
import CheckoutTestScreen from '../view/CheckoutTestScreen';

const CheckoutScreens = (
    <>
        <Route
            path="checkout"
            element={<CheckoutTestScreen />}
        />
        <Route
            path="checkout/j"
            element={<CheckoutTestScreen />}
        />
    </>
);

export default CheckoutScreens;
