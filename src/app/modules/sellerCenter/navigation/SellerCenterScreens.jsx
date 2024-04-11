import { Route } from 'react-router-dom';
import SellerCenterLayout from '../../../platform/components/Layouts/SellerCenterLayout';
import SellerCenterAuthenticatedRoute from '../../../platform/components/navigation/SellerCenterAuthenticatedRoute';
import EquipmentTestScreen from '../view/screens/EquipmentTestScreen';
import SellerCenterRegistrationScreen from '../view/screens/SellerCenterRegistrationScreen';

const SellerCenterScreens = (
    <Route element={<SellerCenterLayout />}>
        <Route
            path="seller-center"
            element={<SellerCenterAuthenticatedRoute />}
        >
            <Route
                path=""
                element={<EquipmentTestScreen />}
            />
        </Route>
        <Route
            path="seller-center/registration"
            element={<SellerCenterRegistrationScreen />}
        />
    </Route>
);

export default SellerCenterScreens;
