import { Route } from 'react-router-dom';
import CIAMTestScreen from '../view/Screen/CIAMTestScreen';
import CIAMTestScreenTwo from '../view/Screen/CIAMTestScreenTwo';

const CIAMScreens = (
    <>
        <Route
            path="login"
            element={<CIAMTestScreen />}
        />
        <Route
            path="signup"
            element={<CIAMTestScreenTwo />}
        />
    </>
);

export default CIAMScreens;
