import { Route } from 'react-router-dom';
import EquipmentTestScreen from '../view/EquipmentTestScreen';

const EquipmentScreens = (
    <Route
        path="equipment"
        element={<EquipmentTestScreen />}
    />
);

export default EquipmentScreens;
