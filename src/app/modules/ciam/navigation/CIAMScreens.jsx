import { Route } from 'react-router-dom';
import CIAMTestScreen from '../view/Screen/CIAMTestScreen';
import CIAMTestScreenTwo from '../view/Screen/CIAMTestScreenTwo';

const CIAMScreens = (
    <>
        <Route
            path="authentication"
            element={<CIAMTestScreen />}
        />
        <Route
            path="authentication/login"
            element={<CIAMTestScreenTwo />}
        />
    </>
);

export default CIAMScreens;
