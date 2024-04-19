import { Route } from 'react-router-dom';
import MyAccountLayout from '../Layout/MyAccountLayout';
import FakeCart from '../view/FakeCart';
import FakeCheckout from '../view/FakeCheckout';
import MyAddress from '../view/MyAddress';
import MyProfile from '../view/MyProfile';
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
        <Route element={<MyAccountLayout />}>
            <Route
                path="/customer/my-profile"
                element={<MyProfile />}
            />
            <Route
                path="/customer/my-address"
                element={<MyAddress />}
            />
        </Route>
    </>
);

export default CustomerScreens;
