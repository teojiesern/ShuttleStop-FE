import { Route } from 'react-router-dom';
import FakeCart from '../view/FakeCart';
import FakeCheckout from '../view/FakeCheckout';
import ProductDetailScreen from '../view/ProductDetailScreen';
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
        <Route
            path="/customer/:category/:id"
            element={<ProductDetailScreen />}
        />
        <Route
            path="/customer/fakeCart"
            element={<FakeCart />}
        />
        <Route
            path="/customer/fakeCheckout"
            element={<FakeCheckout />}
        />
        <Route
            path="/customer/my-account"
            // TODO: Replace with my account screen
            element={<FakeCheckout />}
        />
    </>
);

export default CustomerScreens;
