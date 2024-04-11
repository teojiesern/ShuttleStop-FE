import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CheckoutScreens from '../modules/checkout/navigation/CheckoutScreens';
import CIAMScreens from '../modules/ciam/navigation/CIAMScreens';
import CustomerScreens from '../modules/customer/navigation/CustomerScreens';
import MainScreen from '../modules/main/view/MainScreen';
import MarketingScreens from '../modules/marketing/navigation/MarketingScreens';
import EquipmentScreens from '../modules/sellerCenter/navigation/EquipmentScreens';
import ErrorBoundary from './components/ErrorBoundary';
import AuthLayout from './components/Layouts/AuthLayout';
import CheckoutLayout from './components/Layouts/CheckoutLayout';
import MainLayout from './components/Layouts/MainLayout';
import RootLayout from './components/Layouts/RootLayout';
import SellerCenterLayout from './components/Layouts/SellerCenterLayout';

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
            <Route
                path="/seller-center"
                element={<SellerCenterLayout />}
            >
                {EquipmentScreens}
            </Route>
        </Route>,
    ),
);

export default router;