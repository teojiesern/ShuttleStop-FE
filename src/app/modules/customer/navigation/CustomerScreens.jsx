import { Route } from 'react-router-dom';
import AuthenticatedRoute from '../../../platform/components/navigation/AuthenticatedRoute';
import CheckoutScreen from '../../checkout/view/CheckoutScreen';
import Login from '../../ciam/view/Screen/Login';
import MyAccountLayout from '../Layout/MyAccountLayout';
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
            path="/"
            element={<AuthenticatedRoute />}
        >
            <Route
                path="customer/my-account/:userId"
                // TODO: Replace with my account screen
                element={<ProductDetailScreen />}
            />
            <Route
                path="checkoutScreen"
                element={<CheckoutScreen />}
            />
        </Route>
        <Route
            path="/authentication/login"
            element={<Login />}
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
