import { Route } from 'react-router-dom';
import CheckoutTestScreen from '../view/CheckoutTestScreen';

const CheckoutScreens = (
    <>
        <Route
            path=""
            element={<CheckoutTestScreen />}
        />
        <Route
            path="test1"
            element={<CheckoutTestScreen />}
        />
    </>
);

export default CheckoutScreens;
