import { Route } from 'react-router-dom';
import ProductMainScreen from '../view/ProductMainScreen';

const CustomerScreens = (
    <>
        <Route
            path="/customer/racquets"
            element={<ProductMainScreen />}
        />
        <Route
            path="/customer/footwears"
            element={<ProductMainScreen />}
        />
        <Route
            path="/customer/apparels"
            element={<ProductMainScreen />}
        />
        <Route
            path="/customer/bags"
            element={<ProductMainScreen />}
        />
        <Route
            path="/customer/shuttlecocks"
            element={<ProductMainScreen />}
        />
        <Route
            path="/customer/accessories"
            element={<ProductMainScreen />}
        />
    </>
);

export default CustomerScreens;
