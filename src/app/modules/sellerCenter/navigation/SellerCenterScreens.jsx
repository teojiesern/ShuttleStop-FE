import { Navigate, Route } from 'react-router-dom';
import SellerCenterLayout from '../../../platform/components/Layouts/SellerCenterLayout';
import SellerCenterAuthenticatedRoute from '../../../platform/components/navigation/SellerCenterAuthenticatedRoute';
import SCMyOrdersLayout from '../view/Layout/SCMyOrdersLayout';
import SellerCenterInternalLayout from '../view/Layout/SellerCenterInternalLayout';
import SCAddNewProductsScreen from '../view/screens/SCAddNewProductsScreen';
import SCMyIncomeScreen from '../view/screens/SCMyIncomeScreen';
import SCMyOrdersScreen from '../view/screens/SCMyOrdersScreen';
import SCMyProductsScreen from '../view/screens/SCMyProductsScreen';
import SCShippingSettingsScreen from '../view/screens/SCShippingSettingsScreen';
import SCShopProfileScreen from '../view/screens/SCShopProfileScreen';
import SellerCenterRegistrationScreen from '../view/screens/SellerCenterRegistrationScreen';

const SellerCenterScreens = (
    <Route element={<SellerCenterLayout />}>
        <Route
            path="seller-center"
            element={<SellerCenterAuthenticatedRoute />}
        >
            <Route element={<SellerCenterInternalLayout />}>
                <Route
                    index
                    element={
                        <Navigate
                            to="my-orders"
                            replace
                        />
                    }
                />
                <Route
                    path="my-orders"
                    element={<SCMyOrdersLayout />}
                >
                    <Route
                        index
                        element={<SCMyOrdersScreen />}
                    />
                    <Route
                        path="shipping"
                        element={<SCMyOrdersScreen />}
                    />
                    <Route
                        path="completed"
                        element={<SCMyOrdersScreen />}
                    />
                </Route>
                <Route
                    path="shipping-settings"
                    element={<SCShippingSettingsScreen />}
                />
                <Route
                    path="my-products"
                    element={<SCMyProductsScreen />}
                />
                <Route
                    path="add-new-products"
                    element={<SCAddNewProductsScreen />}
                />
                <Route
                    path="my-income"
                    element={<SCMyIncomeScreen />}
                />
                <Route
                    path="shop-profile"
                    element={<SCShopProfileScreen />}
                />
            </Route>
        </Route>
        <Route
            path="seller-center/registration"
            element={<SellerCenterRegistrationScreen />}
        />
    </Route>
);

export default SellerCenterScreens;
