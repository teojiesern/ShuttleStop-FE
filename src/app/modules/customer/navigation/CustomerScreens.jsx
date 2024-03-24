import { Route } from 'react-router-dom';
import CustomerTestScreen from '../view/CustomerTestScreen';

const CustomerScreens = (
    <Route
        path="customer"
        element={<CustomerTestScreen />}
    />
);

export default CustomerScreens;
