import { Route } from 'react-router-dom';
import ProductBrowsing from '../view/ProductBrowsing';

const CustomerScreens = (
    <>
        <Route
            path="/customer/racquets"
            element={<ProductBrowsing />}
        />
        <Route
            path="/customer/footwear"
            element={<ProductBrowsing />}
        />
        <Route
            path="/customer/apparel"
            element={<ProductBrowsing />}
        />
        <Route
            path="/customer/bags"
            element={<ProductBrowsing />}
        />
        <Route
            path="/customer/shuttlecocks"
            element={<ProductBrowsing />}
        />
        <Route
            path="/customer/accessories"
            element={<ProductBrowsing />}
        />
    </>
);

export default CustomerScreens;
