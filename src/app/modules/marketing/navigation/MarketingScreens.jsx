import { Route } from 'react-router-dom';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';
import CoachProfile from '../view/component/CoachProfile';

import MarketingCoachRegistrationScreen from '../view/MarketingCoachRegistrationScreen';
import MarketingTestScreen from '../view/MarketingTestScreen';

const MarketingScreens = (
    <>
        <Route
            path="/marketing/competitions"
            element={<MarketingTestScreen />}
        />
        <Route
            path="/marketing/coaches"
            element={<MarketingTestScreenTwo />}
        />
        <Route
            path="/marketing/coach-registration"
            element={<MarketingCoachRegistrationScreen />}
        />
        <Route
            path="/marketing/coach-profile"
            element={<CoachProfile />}
        />
    </>
);

export default MarketingScreens;
