import { Route } from 'react-router-dom';
import SellerCenterAuthenticatedRoute from '../../../platform/components/navigation/SellerCenterAuthenticatedRoute';
import EquipmentTestScreen from '../view/EquipmentTestScreen';

const SellerCenterScreens = (
    <>
        <Route
            path="seller-center"
            element={<SellerCenterAuthenticatedRoute />}
        >
            <Route
                path="equipment-test"
                element={<EquipmentTestScreen />}
            />
        </Route>
        <Route
            path="seller-center/registration"
            element={<EquipmentTestScreen />}
        />
    </>
);

export default SellerCenterScreens;
