import { Route } from 'react-router-dom';
import CustomerTestScreen from '../view/CustomerTestScreen';

const CustomerScreens = (
    <>
        <Route
            path="/customer/racquets"
            element={<CustomerTestScreen />}
        />
        <Route
            path="/customer/footwear"
            element={<CustomerTestScreen />}
        />
        <Route
            path="/customer/apparel"
            element={<CustomerTestScreen />}
        />
        <Route
            path="/customer/bags"
            element={<CustomerTestScreen />}
        />
        <Route
            path="/customer/shuttlecocks"
            element={<CustomerTestScreen />}
        />
        <Route
            path="/customer/accessories"
            element={<CustomerTestScreen />}
        />
    </>
);

export default CustomerScreens;
