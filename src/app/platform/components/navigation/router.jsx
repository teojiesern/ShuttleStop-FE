import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CheckoutScreens from '../../../modules/checkout/navigation/CheckoutScreens';
import CIAMScreens from '../../../modules/ciam/navigation/CIAMScreens';
import CustomerScreens from '../../../modules/customer/navigation/CustomerScreens';
import MainScreen from '../../../modules/main/view/MainScreen';
import MarketingScreens from '../../../modules/marketing/navigation/MarketingScreens';
import SellerCenterScreens from '../../../modules/sellerCenter/navigation/SellerCenterScreens';
import ErrorBoundary from '../ErrorBoundary';
import AuthLayout from '../Layouts/AuthLayout';
import CheckoutLayout from '../Layouts/CheckoutLayout';
import MainLayout from '../Layouts/MainLayout';
import RootLayout from '../Layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            errorElement={<ErrorBoundary />}
            element={<RootLayout />}
        >
            <Route
                path="/"
                element={<MainScreen />}
            />
            <Route element={<MainLayout />}>
                {MarketingScreens}
                {CustomerScreens}
            </Route>
            <Route
                element={<CheckoutLayout />}
                path="/checkout"
            >
                {CheckoutScreens}
            </Route>
            <Route
                path="/authentication"
                element={<AuthLayout />}
            >
                {CIAMScreens}
            </Route>
            {SellerCenterScreens}
        </Route>,
    ),
);

export default router;
