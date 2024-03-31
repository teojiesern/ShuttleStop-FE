import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CheckoutScreens from '../modules/checkout/navigation/CheckoutScreens';
import CIAMScreens from '../modules/ciam/navigation/CIAMScreens';
import CustomerScreens from '../modules/customer/navigation/CustomerScreens';
import MainScreen from '../modules/main/view/MainScreen';
import MarketingScreens from '../modules/marketing/navigation/MarketingScreens';
import EquipmentScreens from '../modules/sellerCenter/navigation/EquipmentScreens';
import Header from './components/Header/Header';
import AuthLayout from './components/Layouts/AuthLayout';
import MainLayout from './components/Layouts/MainLayout';
import SellerCenterLayout from './components/Layouts/SellerCenterLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Header />}>
                <Route
                    path="/"
                    element={<MainScreen />}
                />
                <Route element={<MainLayout />}>
                    {MarketingScreens}
                    {CustomerScreens}
                    {CheckoutScreens}
                </Route>
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
        </>,
    ),
);

export default router;
