import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CheckoutScreens from '../modules/checkout/navigation/CheckoutScreens';
import CIAMScreens from '../modules/ciam/navigation/CIAMScreens';
import CustomerScreens from '../modules/customer/navigation/CustomerScreens';
import EquipmentScreens from '../modules/equipmentMarketplace/navigation/EquipmentScreens';
import MainScreen from '../modules/main/view/MainScreen';
import MarketingScreens from '../modules/marketing/navigation/MarketingScreens';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<MainScreen />}
            />
            {MarketingScreens}
            {CIAMScreens}
            {CustomerScreens}
            {CheckoutScreens}
            {EquipmentScreens}
        </>,
    ),
);

export default router;
