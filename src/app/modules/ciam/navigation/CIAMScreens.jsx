import { Route } from 'react-router-dom';
import CIAMTestScreen from '../view/CIAMTestScreen';
import CIAMTestScreenTwo from '../view/CIAMTestScreenTwo';

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
